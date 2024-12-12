"use client"
import { useFilter } from '@/store/Filter';
import styles from './FilterSelect.module.css';

interface FilterSelectProps{
    text: string | number;
}

const FilterSelect : React.FC <FilterSelectProps> = ({text}) =>{

    const {addItem} = useFilter();

    const selectFilter = () =>{
        addItem(text);
    }

    return(
        <button className={styles.filterSelect} onClick={selectFilter}>
            {text}
        </button>
    )
}


export default FilterSelect;