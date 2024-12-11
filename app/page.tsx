import FilterAside from "@/components/FilterAside";
import styles from "./Home.module.css";
import CardContainer from "@/components/CardContainer";
import FilterHeader from "@/components/FilterHeader";
import SearchDetails from "@/components/SearchDetails";
import { dataFetch } from "@/services/dataFetch";

export default async function Home() {

  const carsData = await dataFetch();
  
  return (
    <main className={styles.home}>
      <FilterAside filter={carsData.availableFilters}/>
      
      <section className={styles.list}>
        <FilterHeader/>
        <SearchDetails total={carsData.items.length}/>
        <CardContainer cars={carsData.items}/>
      </section>
    </main>
    
  );
}
