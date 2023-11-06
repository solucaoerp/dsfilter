import { ProductDTO } from "../models/product";
import { products } from '../data/products';

export const findByPrice = (min: number, max: number): ProductDTO[] => {
    return products
        .filter(product => product.price >= min && product.price <= max)
        .sort((a, b) => a.price - b.price);
};
