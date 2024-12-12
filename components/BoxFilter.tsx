"use client"
import { AvaibleFilter } from '@/store/AvaibleFilters';
import styles from './BoxFilter.module.css';
import Selector from './Selector';
import { useFilter } from '@/store/Filter';


interface BoxFilterProp{
    filter:AvaibleFilter;
}

const BoxFilter : React.FC <BoxFilterProp>= ({filter}) =>{

    const {clearCollection} = useFilter();

    const limpiar = () =>{
        clearCollection();
    }

    return(
        <div className={styles.boxFilter}>
            
            <div className={styles.cleanBtnContainer}>
                <button className={styles.cleanBtn} onClick={limpiar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    Limpiar Filtros
                </button>
            </div>

            <Selector text='Marca' list={filter.brand}/>
            <Selector text='Modelo' list={filter.model}/>
            <Selector text='Año' list={filter.year} />
            <Selector text='Version' list={filter.version}/>
            <Selector text='Cidade' list={filter.city}/>
        </div>
    )
}

export default BoxFilter;