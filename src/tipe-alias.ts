export type ID = string | number; // tipe alias union
export type Category = {
    id: ID;
    name: string;
    description?: string; // option properti
}

export type Product= {
    id: ID;
    name: string;
    price: number;
    category: Category;
    description?: string; // option properti
}