import { useEffect, useState } from "react";
import { GlobalProvider } from "./contexts/context-global";
import { createGlobalContextProviders } from "./contexts/context-combiner";

import Header from "./components/common/Header";
import Card from "./components/common/Card";
import Filter from "./components/common/Filter";
import ProductList from "./components/common/ProductList";
import { ProductDTO } from "./models/product";
import * as serviceProduct from "./services/product-service";

export default function App() {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [productCount, setProductCount] = useState<number>(0);

  useEffect(() => {
    const allProducts = serviceProduct.findByPrice(0, Number.MAX_VALUE);
    setProducts(allProducts);
    setProductCount(allProducts.length);
    setInitialLoadComplete(true);
  }, []);

  function handleFilter(minPrice: number, maxPrice: number) {
    const filteredProducts = serviceProduct.findByPrice(minPrice, maxPrice);
    setProducts(filteredProducts);
    setProductCount(filteredProducts.length);
  }

  const contextValues = {
    productCountContext: {
      productCount,
      setProductCount
    },
    /* Se necessário, adicionar outros contextos aqui */
  };

  const providers = createGlobalContextProviders(contextValues);

  return (
    <GlobalProvider providers={providers}>
      <Header />
      <main>
        <Card>
          <Filter onFilter={handleFilter} />
        </Card>
        <Card>
          <ProductList products={products} initialLoadComplete={initialLoadComplete} />
        </Card>
      </main>
    </GlobalProvider>
  );
}