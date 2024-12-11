import { create } from 'zustand'
import { type FilterControl } from './FilterControl'

export const useFilter = create<FilterControl> ((set)=>{
    return{
        category:"",
        item:"",
        collectionFilter:[],

        addItem: () =>
            set((state) => ({
                collectionFilter: [
                    ...state.collectionFilter,
                    { item: state.item},
                ],
            })),


        deleteItem: (itemToDelete: string) =>
        set((state) => ({
            collectionFilter: state.collectionFilter.filter(
                (filter) => filter.item !== itemToDelete 
            ),
        })),        


        clearCollection: () => set(()=>({
            collectionFilter: [],
        }))
    }
})