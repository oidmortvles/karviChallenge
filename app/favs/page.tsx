"use client"

import Link from 'next/link';
import styles from './Favs.module.css';
import { useFav } from '@/store/Favourites';
import CardProduct from '@/components/CardProduct';

const Favs : React.FC = () =>{

    const{collectionFav} = useFav();

    return(
        <main className={styles.favsContainer}>
            <header className={styles.headerFavs}>
                <h1 >Favoritos</h1>
                <p>Encuentra todos los productos que guardaste</p>
            </header>

            <section className={styles.favsList}>
                {
                    collectionFav.length > 0 ? 
                    (
                        collectionFav.map((item) => (
                        <CardProduct car={item} key={item.id} />
                        ))
                    ) 
                    : 
                    (
                        <p className={styles.aviso}>
                            Aún no tienes Favoritos
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                            </svg>
                        </p>
                    )
                }
            </section>

            <div className={styles.favouriteContainer}>
                <Link href={"/"} className={styles.favs}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                    </svg>
                     Volver al Inicio
                </Link>
            </div>

        </main>
    )
}


export default Favs;