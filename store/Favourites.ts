import { create } from 'zustand'
import { type FavControl } from './FavControl'

export const useFav = create<FavControl> ((set)=>{
    return{
        collectionFav:[],
        fav:false,

        addFav: (newCar) => set((state) => {
            return {
                    ...state,
                    collectionFav: [...state.collectionFav, newCar],
                    fav: true,
            };
        }),


        deleteFav: (carToRemove) =>
            set((state) => ({
                ...state,
                collectionFav: state.collectionFav.filter((car) => car.id !== carToRemove.id),
                fav: state.collectionFav.length > 1,
        })),


        
        clearCollectionFav: () =>
            set(() => ({
                collectionFav: [],
                fav: false,
        })),
            
    }
})