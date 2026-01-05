import { useState, useEffect } from 'react';
import { CartItem } from '../types';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Savatchani localStorage'dan yuklash
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Savatchani saqlash
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Mahsulot qo'shish
  const addToCart = (item: CartItem) => {
    const existingItem = cart.find(i => i.product.id === item.product.id);
    
    if (existingItem) {
      const newCart = cart.map(i =>
        i.product.id === item.product.id
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      );
      saveCart(newCart);
    } else {
      saveCart([...cart, item]);
    }
  };

  // Mahsulotni o'chirish
  const removeFromCart = (productId: string) => {
    saveCart(cart.filter(item => item.product.id !== productId));
  };

  // Miqdorni o'zgartirish
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    const newCart = cart.map(item =>
      item.product.id === productId
        ? { ...item, quantity }
        : item
    );
    saveCart(newCart);
  };

  // Savatchani tozalash
  const clearCart = () => {
    saveCart([]);
  };

  // Jami narx
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // Jami mahsulotlar soni
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
  };
};
