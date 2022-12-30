const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;
      let existingProduct = state.cart.find((item) => item.id === id + color);

      if (existingProduct) {
        let updatedProduct = state.cart.map((item) => {
          if (item.id === id + color) {
            let newAmount = item.amount + amount;
            if (newAmount >= item.max) newAmount = item.max;
            return {
              ...item,
              amount: newAmount,
            };
          } else return item;
        });
        return { ...state, cart: updatedProduct };
      } else {
        let cartProduct;
        cartProduct = {
          id: id + color,
          name: product.name,
          image: product.image[0].url,
          max: product.stock,
          price: product.price,
          color,
          amount,
        };
        return { ...state, cart: [...state.cart, cartProduct] };
      }

    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: updatedCart };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "SET_INCREMENT":
      let updatedIncrementProduct = state.cart.map((item) => {
        if (item.id === action.payload) {
          let incAmount = item.amount === item.max ? item.max : item.amount + 1;
          return {
            ...item,
            amount: incAmount,
          };
        } else return item;
      });
      return { ...state, cart: updatedIncrementProduct };

    case "SET_DECREMENT":
      let updatedDecrementProduct = state.cart.map((item) => {
        if (item.id === action.payload) {
          let decmount = item.amount === 1 ? 1 : item.amount - 1;
          return {
            ...item,
            amount: decmount,
          };
        } else return item;
      });
      return { ...state, cart: updatedDecrementProduct };

    case "CART_TOTAL_ITEM_PRICE":
      let { totalPrice, totalItem } = state.cart.reduce(
        (accum, currElem) => {
          let { price, amount } = currElem;
          accum.totalItem += amount;
          accum.totalPrice += price * amount;
          return accum;
        },
        { totalItem: 0, totalPrice: 0 }
      );
      return {
        ...state,
        totalItem,
        totalPrice,
      };

    default:
      return state;
  }
};

export default cartReducer;
