import { useEffect, useState } from "react";

import Header from "./components/common/Header";
import Card from "./components/common/Card";

import Filter from "./components/common/Filter";
import ProductList from "./components/common/ProductList";
import { ProductDTO } from "./models/product";
import { findByPrice } from "./services/product-service";

export default function App() {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    const allProducts = findByPrice(0, Number.MAX_VALUE);
    setProducts(allProducts);
    setInitialLoadComplete(true);
  }, []);

  function handleFilter(minPrice: number, maxPrice: number) {
    const filteredProducts = findByPrice(minPrice, maxPrice);
    setProducts(filteredProducts);
  }

  return (
    <>
      <Header />
      <main>
        <Card>
          <Filter onFilter={handleFilter} />
        </Card>
        <Card>
          <ProductList products={products} initialLoadComplete={initialLoadComplete} />
        </Card>
      </main>
    </>
  );
}