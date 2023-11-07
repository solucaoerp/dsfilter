import { useEffect, useState } from "react";
import { ProductCountContext } from "./contexts/context-product";

import Header from "./components/common/Header";
import Card from "./components/common/Card";

import { ProductDTO } from "./models/product";
import Filter from "./components/common/Filter";
import ProductList from "./components/common/ProductList";
import * as serviceProduct from "./services/product-service";

export default function App() {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [productCount, setProductCount] = useState<number>(0); // Nome para o estado e setter

  useEffect(() => {
    const allProducts = serviceProduct.findByPrice(0, Number.MAX_VALUE);
    setProducts(allProducts);
    setProductCount(allProducts.length);
    setInitialLoadComplete(true);
  }, []);

  function handleFilter(minPrice: number, maxPrice: number): ProductDTO[] {
    const filteredProducts = serviceProduct.findByPrice(minPrice, maxPrice);
    setProducts(filteredProducts);
    return filteredProducts;
  }

  return (
    <ProductCountContext.Provider value={{ productCount, setProductCount }}>
      <Header />
      <main>
        <Card>
          <Filter onFilter={handleFilter} />
        </Card>
        <Card>
          <ProductList products={products} initialLoadComplete={initialLoadComplete} />
        </Card>
      </main>
    </ProductCountContext.Provider>
  );
}