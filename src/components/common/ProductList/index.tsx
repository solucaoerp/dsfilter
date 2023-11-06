import './styles.css';
import { ProductDTO } from "../../../models/product";

type ProductListProps = {
    products: ProductDTO[];
    initialLoadComplete: boolean;
};

function ProductList({ products, initialLoadComplete }: ProductListProps) {

    if (products.length === 0 && initialLoadComplete) {
        return <p className="noProductsMessage">Nenhum produto foi encontrado nesta faixa de preço.</p>;
    }

    return (
        <div className="productList">
            {products.map((product) => (
                <div key={product.id} className="productItem">
                    <h3 className="productName">{product.name}</h3>
                    <p className="productPrice">R$ {product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;