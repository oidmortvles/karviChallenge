"use client"
import { useState } from 'react';
import styles from './Selector.module.css';
import FilterSelect from './FilterSelect';


interface SelectorProps<T> {
    text: string;
    list: T[];
}

const Selector = <T extends { id: string | number; name: string | number }>({text,list}: SelectorProps<T>) =>{

    const [active,setActive] = useState (false);

    const selectSelector = () =>{
        setActive(!active)
    }

    return(
        <div className={`${styles.selector} ${active ? styles.expand : ""}`}>
            <header className={styles.header} onClick={selectSelector}>
                <h3>{text}</h3>
                <button className={styles.dropdown}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 16" className={`${active ? styles.svgActive : ''}`}>
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
            </header>
            
            <ul className={styles.list}>
                {
                    list.map((item, index) => (
                        <FilterSelect text={item.id} key={index}/>
                    ))  
                }
            </ul>
        </div>
    )
}


export default Selector;