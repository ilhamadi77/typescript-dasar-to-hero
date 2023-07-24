export interface Seller{
    id: number;
    name: string;
    address?: string;
    readonly nip: string;
    readonly npwp: string;
}