export interface FilterControl {
    
    category: string;
    item: string | number;
    collectionFilter: { item: string | number }[];
    addItem: () => void;
    deleteItem: (itemToDelete: string) => void;
    clearCollection: () => void;
    
}
