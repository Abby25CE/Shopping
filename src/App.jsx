import { useState } from "react";
import { Products } from "./components/products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";

function App() {
  const [products] = useState(initialProducts);
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

  const filteredProducts = filterProducts(products);

  return (
    <div className="">
      <Header />
      <Products products={filteredProducts} />
    </div>
  );
}

export default App;
