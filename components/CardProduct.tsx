import ButtonCta from './ButtonCta';
import styles from './CardProduct.module.css';
import Carrousel from './Carrousel';
import { type Car } from '@/store/Car';


interface CardProductProps{
    car:Car
}

const CardProduct : React.FC <CardProductProps> = ({car}) =>{
    return(
        <figure className={styles.cardProduct}>
            <Carrousel car={car}/>

            <section className={styles.dataSection}>
                
                <div className={styles.yearAndKm}>
                    <span>{car.year}</span>
                    <span>{`${car.mileage} Km`}</span>
                </div>

                <div className={styles.modelAndDetails}>
                    <p className={styles.model}>{`${car.brand} ${car.model}`}</p>
                    <p className={styles.details}>{car.version}</p>
                </div>

                <div className={styles.priceAndCity}>
                    <h4 className={styles.price}>{`R$ ${car.price}`}</h4>
                    <span className={styles.city}>{car.city}</span>
                </div>

                <ButtonCta/>

            </section>
        </figure>
    )
}



export default CardProduct