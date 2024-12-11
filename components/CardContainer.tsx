import styles from './CardContainer.module.css';
import CardProduct from './CardProduct';
import { type Car } from '@/store/Car';


interface CardContainerProps{
    cars: Car[]
}

const CardContainer : React.FC <CardContainerProps> = ({cars}) =>{
    return(
        <section className={styles.cardContainer}>
            {
                cars.map((item) =>(
                    <CardProduct car={item} key={item.id}/>
                ))
            }
        </section>
    )
}

export default CardContainer;