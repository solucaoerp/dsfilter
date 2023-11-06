import { ProductDTO } from "../models/product";
import { products } from '../data/products';

export function findByPrice(min: number, max: number): ProductDTO[] {
    return products
        .filter((product: ProductDTO) => product.price >= min && product.price <= max)
        .sort((a: ProductDTO, b: ProductDTO) => a.price - b.price);
}