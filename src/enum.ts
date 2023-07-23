export enum CustomerType {
    REGULER= "REGULER",
    GOLD= "GOLD",
    PLATINUM= "PLATINUM"
};

export type Custumer= {
    id: string;
    name: string;
    type: CustomerType
}