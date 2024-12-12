import { create } from 'zustand'
import { type FilterControl } from './FilterControl'

export const useFilter = create<FilterControl> ((set)=>{
    return{
        category:"",
        item:"",
        strict:true,
        collectionFilter: new Set(),
        
        
        addItem: (newItem: string | number) => set((state) => {
                const newCollection = new Set(state.collectionFilter);
                newCollection.add(newItem); // Agrega el nuevo ítem, descartando duplicados automáticamente
                return { collectionFilter: newCollection };
            }),


        deleteItem: (itemToDelete: string | number) => set((state) => {
                const newCollection = new Set(state.collectionFilter);
                newCollection.delete(itemToDelete); // Elimina el ítem si existe
                return { collectionFilter: newCollection };
            }),        

        
        clearCollection: () => set(() => ({
                collectionFilter: new Set(),
            })),
         
        
        falseStrict : () => set(() => ({  
            strict:false, 
        })),


        trueStrict : () => set( () =>({
            strict:true,
        })),

            
    }
})