export interface Year{
    id:number;
    name:number;
}


export interface City{
    id: string;
    name: string;
    slug: string;
}


export interface Brand{
    id:string;
    name:string;
}


export interface Model{
    id:string;
    name:string;
    brand:string;
}


export interface Version{
    id:string;
    name:string;
}



export interface AvaibleFilter{
    year: Year[];
    city: City[];
    brand:Brand[];
    model: Model[];
    version: Version[];
}