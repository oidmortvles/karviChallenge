import styles from './CardContainer.module.css';
import CardProduct from './CardProduct';

const CardContainer : React.FC = () =>{
    return(
        <section className={styles.cardContainer}>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>

            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>

        </section>
    )
}

export default CardContainer;