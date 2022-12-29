const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      var priceArr = action.payload.map((item) => item.price);
      var maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        gridView: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        gridView: false,
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sortingValue: action.payload,
      };

    case "GET_SORTED_PRODUCTS":
      let sortedProducts;
      const { filterProducts, sortingValue } = state;
      let tempSortData = [...filterProducts];

      const sorter = (a, b) => {
        if (sortingValue === "A-Z") return a.name.localeCompare(b.name);
        if (sortingValue === "Z-A") return b.name.localeCompare(a.name);
        if (sortingValue === "low-high") return a.price - b.price;
        return b.price - a.price;
      };
      sortedProducts = tempSortData.sort(sorter);
      return { ...state, filterProducts: sortedProducts };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { allProducts } = state;
      let tempFilterProducts = [...allProducts];
      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilterProducts = tempFilterProducts.filter((item) => {
          return item.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter((item) => {
          return item.category === category;
        });
      }

      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter((item) => {
          return item.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color !== "all") {
        tempFilterProducts = tempFilterProducts.filter((item) => {
          return item.colors.includes(color);
        });
      }
      if (price) {
        tempFilterProducts = tempFilterProducts.filter(
          (item) => item.price <= price
        );
      }

      return {
        ...state,
        filterProducts: tempFilterProducts,
      };

    case "CLEAR_FILTERS":
      var priceArr = action.payload.map((item) => item.price);
      var maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: maxPrice,
          maxPrice: maxPrice,
          minPrice: 0,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
