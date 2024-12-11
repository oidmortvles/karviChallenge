import ButtonCta from './ButtonCta';
import styles from './CardProduct.module.css';
import Carrousel from './Carrousel';


const CardProduct : React.FC = () =>{
    return(
        <figure className={styles.cardProduct}>
            <Carrousel/>

            <section className={styles.dataSection}>
                
                <div className={styles.yearAndKm}>
                    <span>2015</span>
                    <span>{`${102.867} Km`}</span>
                </div>

                <div className={styles.modelAndDetails}>
                    <p className={styles.model}>Hyundai Hb20</p>
                    <p className={styles.details}>1.6 Comfort Plus 16v Flex 4p</p>
                    <p className={styles.details}>Automatico</p>
                </div>

                <div className={styles.priceAndCity}>
                    <h4 className={styles.price}>{`R$ ${53.990}`}</h4>
                    <span className={styles.city}>Indaiatuba, SP</span>
                </div>

                <ButtonCta/>

            </section>
        </figure>
    )
}



export default CardProduct