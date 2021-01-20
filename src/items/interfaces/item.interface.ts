export interface Item {
    id?: string; // "?" indicates that it is optional
    name: string;
    description?: string;
    qty: number;
}