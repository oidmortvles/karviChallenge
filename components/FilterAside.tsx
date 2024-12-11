import styles from './FilterAside.module.css';
import Selector from './Selector';

const FilterAside : React.FC = () =>{
    return(
        <aside className={styles.filterAside}>
            <Selector text='Marca'/>
            <Selector text='Modelo'/>
            <Selector text='Año'/>
            <Selector text='Version'/>
            <Selector text='Cidade'/>
        </aside>
    )
}

export default FilterAside;