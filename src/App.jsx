import { Products } from "./components/products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./Hooks/useFilters";

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <div className="">
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </div>
  );
}

export default App;
