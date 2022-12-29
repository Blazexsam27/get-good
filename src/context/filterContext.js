import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();
const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: "low-high",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    maxPrice: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  const handleSort = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS", payload: products });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "GET_SORTED_PRODUCTS" });
  }, [products, state.sortingValue, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        handleSort,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
