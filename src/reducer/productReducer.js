const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "SET_SINGLE_LOADING":
      return { ...state, isLoading: true };

    case "SET_API_DATA":
      const featuredProducts = action.payload.filter((item) => {
        return item.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featuredProducts,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isLoading: false,
        singleProduct: action.payload,
      };

    case "API_ERROR":
      return { ...state, isLoading: false, showError: true };

    case "SET_SINGLE_ERROR":
      return { ...state, isSingleLoading: false, showError: true };
    default:
      return state;
  }
};

export default ProductReducer;
