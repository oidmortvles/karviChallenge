import { AvaibleFilter } from '@/store/AvaibleFilters';
import styles from './FilterAside.module.css';
import Selector from './Selector';


interface FilterAsideProp{
    filter:AvaibleFilter;
}


const FilterAside : React.FC <FilterAsideProp> = ({filter}) =>{
    return(
        <aside className={styles.filterAside}>
            <Selector text='Marca' list={filter.brand}/>
            <Selector text='Modelo' list={filter.model}/>
            <Selector text='Año' list={filter.year} />
            <Selector text='Version' list={filter.version}/>
            <Selector text='Cidade' list={filter.city}/>
        </aside>
    )
}

export default FilterAside;