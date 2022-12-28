import React from "react";
import { useFilterContext } from "../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

function ProductList() {
  const { filterProducts, gridView } = useFilterContext();

  if (gridView === true) {
    return <GridView products={filterProducts} />;
  }

  if (gridView === false) {
    return <ListView products={filterProducts} />;
  }
}
export default ProductList;
