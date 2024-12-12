"use client"
import { useState } from 'react';
import ButtonFilter from './ButtonFilter';
import styles from './OptionsMobile.module.css';
import SearchBar from './SearchBar';
import BoxFilter from './BoxFilter';
import { AvaibleFilter } from '@/store/AvaibleFilters';


interface OptionsMobileProps{
    filter:AvaibleFilter;
}

const OptionsMobile : React.FC <OptionsMobileProps> = ({filter}) =>{

    const [barSearch,setBarSearch] = useState(false);
    const [boxFilter,setBoxFilter] = useState(false);

    const busqueda = () =>{
        setBoxFilter(false);
        setBarSearch(!barSearch);
    }

    const filtrado = () =>{
        setBarSearch(false);
        setBoxFilter(!boxFilter);
    }

    const searchSvg =
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>

    const filterSvg =
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"  viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5M2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5M8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1m3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5m2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5"/>
        </svg>


    return(
        <>
            <nav className={styles.optionsMobile}>
                <ButtonFilter svg={searchSvg} text='Buscar' fn={busqueda}/>
                <span className={styles.separator}></span>
                <ButtonFilter svg={filterSvg} text='Filtrar' fn={filtrado}/>
            </nav>

            {barSearch && <SearchBar/>}
            {boxFilter && <BoxFilter filter={filter}/>}
        </>
    )
}

export default OptionsMobile;