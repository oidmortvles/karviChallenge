import { Car } from "./Car";

export interface FavControl {    
    collectionFav: Car[];    
    fav:boolean;
    car?:Car;
    
    
    //CONTROLA LOS ITEMS DE LA COLECCION
    addFav: (newCar : Car) => void;
    deleteFav: (carRemove : Car) => void;
    clearCollectionFav: () => void;    
}
