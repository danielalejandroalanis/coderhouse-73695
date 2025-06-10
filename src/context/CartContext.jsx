import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeProductFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct.quantity === 1) {
        return prevCart.filter((item) => item.id !== product.id);
      }
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const deleteProductFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const getTotalCount = () => {
    return cart.reduce((total, item) => Number(total) + item.quantity, 0);
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        getTotalCount,
        deleteProductFromCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
