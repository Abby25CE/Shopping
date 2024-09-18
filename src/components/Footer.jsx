import "./Footer.css";
import { useFilters } from "../Hooks/useFilters";

export function Footer() {
  const { filters } = useFilters();

  return (
    <footer className="footer">
      {`Category: ${filters.category}, Min Price: ${filters.minPrice}`}
      <h4>Prueba técnica de React</h4>
      <span>@AbbyCE25</span>
      <h5>Shopping cart con UseContext y UseReducer</h5>
    </footer>
  );
}
