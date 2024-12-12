"use client";
import { useEffect, useState } from "react";
import styles from "./CardContainer.module.css";
import CardProduct from "./CardProduct";
import { type Car } from "@/store/Car";
import { useFilter } from "@/store/Filter";
import SearchDetails from "./SearchDetails";
import Pagination from "./Pagination";
import SearchDetailsMobile from "./SearchDetailsMobile";
import OptionsMobile from "./OptionsMobile";

interface CardContainerProps {
  cars: Car[];
}


const CardContainer: React.FC<CardContainerProps> = ({ cars }) => {
  const { collectionFilter,strict } = useFilter();
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [currentPage, setCurrentPage] = useState(1);

  const maxItems = 12;

  //RENDERIZA DE ACUERDO AL LISTADO DE COLLECTIONFILTER
  useEffect(() => {
    if (collectionFilter.size === 0) {
      setFilteredCars(cars);
    } else {
      setFilteredCars(cars.filter((car) =>
          Array.from(collectionFilter).every((filterItem) =>
            strict ? 
            Object.values(car).includes(filterItem) 
            :
            //COINCIDENCIA PARCIAL PARA BUSQUEDA EN MOBILE
            Object.values(car).some((value) =>
              value.toString().toLowerCase().includes(filterItem.toString()) 
            ) 
          )
        )
      );
    }
    setCurrentPage(1);
  }, [collectionFilter, cars, strict]);


  //CONTROLA LOS ITEMS MOSTRADOS
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * maxItems,
    currentPage * maxItems
  );


  //TOTAL DE PAGINA
  const totalPages = Math.ceil(filteredCars.length / maxItems);


  //ORDENA POR MENOR PRECIO
  const minorPrice = () => {
    const result = [...filteredCars].sort((a, b) => a.price - b.price);
    setFilteredCars(result);
  };

  return (
      <>
        <SearchDetails cars={filteredCars} fn={minorPrice} />
        
        {/* MOBILE */}
        <OptionsMobile/>
        <SearchDetailsMobile cars={filteredCars} fn={minorPrice}/>
        {/* MOBILE */}

        <section className={styles.cardContainer}>
            {
              paginatedCars.length > 0 ? 
              (
                paginatedCars.map((item) => (
                  <CardProduct car={item} key={item.id} />
                ))
              ) 
              : 
              (
                <p className={styles.aviso}>
                  No hay resultados que coincidan con la búsqueda
                </p>
              )
            }
        </section>

        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
      </>
  );
};

export default CardContainer;
