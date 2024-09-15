import { useState } from "react";
import { Products } from "./components/products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";

function useFilters() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filterProducts, setFilters };
}

function App() {
  const [products] = useState(initialProducts);
  const [filterProducts, setFilters] = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <div className="">
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </div>
  );
}

export default App;
