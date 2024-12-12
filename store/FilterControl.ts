export interface FilterControl {
    
    category: string;
    item: string | number;
    collectionFilter: Set<string | number>;
    addItem: (newItem: string | number) => void;
    deleteItem: (itemToDelete: string | number) => void;
    clearCollection: () => void;
    
}
