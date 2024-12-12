"use client"
import { useFilter } from '@/store/Filter';
import styles from './SearchBar.module.css';



const SearchBar : React.FC = () =>{

    const {addItem,clearCollection, falseStrict, trueStrict} = useFilter();

    const handleText = (e: React.ChangeEvent<HTMLInputElement>) =>{
        falseStrict();
        const value = e.target.value;
        if (value.length >= 3){
            addItem(value.toLowerCase());
        }
        else{
            clearCollection();
            trueStrict();
        }
    }


    return(
        <div className={styles.searchBar}>
            <input type="search" id="searchBar" name="searchBar" className={styles.bar} placeholder='Ingresa las primeras 3 letras' onChange={handleText}/>
        </div>
    )
}


export default SearchBar;