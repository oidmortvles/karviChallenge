"use client"
import { useFilter } from '@/store/Filter';
import styles from './TagItem.module.css';

interface TagItemProp{
    text:string | number;
}


const TagItem : React.FC <TagItemProp> = ({text}) =>{

    const {deleteItem} = useFilter();

    const deleteTag = () =>{
        deleteItem(text);
    }

    return(
        <span className={styles.tagItem}>
            {text}
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16" onClick={deleteTag}>
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>            
        </span>
    )
}

export default TagItem;