import { Products } from "./products";

export class Cart {
    productId: number;
    product: Products;
    productQuantity: number;
    userId: number;
}
export interface CartInterface{
    productId: number;
    product: Products;
    productQuantity: number;
    userId: number;
}

export interface CartCreationInterface{
    productId: number;
    productQuantity: number;
    userId: number;
}

export interface CartDTOInterface{
    carts: Cart[];
    total: number;
}
