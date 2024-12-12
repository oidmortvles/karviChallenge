export interface FilterControl {    
    category: string;
    item: string | number;
    collectionFilter: Set<string | number>;    
    strict:boolean;
    
    
    //CONTROLA LOS ITEMS DE LA COLECCION
    addItem: (newItem: string | number) => void;
    deleteItem: (itemToDelete: string | number) => void;

    clearCollection: () => void;

    //PERMITE UNA BUSQUEDA PARCIAL O TOTAL
    falseStrict: () => void;
    trueStrict: () => void;
    
}
