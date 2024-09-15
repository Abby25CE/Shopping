import { Filters } from "./Filters";

export function Header({ changeFilters }) {
  return (
    <header className="">
      <h1 className=""> React Shop</h1>
      <Filters onChange={changeFilters} />
    </header>
  );
}
