import "./Footer.css";
import { useFilters } from "../Hooks/useFilters";
import { useCart } from "../Hooks/useCart";

export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();

  return (
    <footer className="footer">
      {`Category: ${filters.category}, Min Price: ${filters.minPrice}`}
      <h4>Prueba técnica de React</h4>
      <span>@AbbyCE25</span>
      <h5>Shopping cart con UseContext y UseReducer</h5>
    </footer>
  );
}
