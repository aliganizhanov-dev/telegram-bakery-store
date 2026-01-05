import { Product, Order } from '../types';

const BASE_URL = import.meta.env.VITE_API_URL || 'https://telegram-bakery-store.onrender.com';
const API_URL = BASE_URL.endsWith('/api') ? BASE_URL : `${BASE_URL}/api`;

// Mahsulotlarni olish
export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();
  return data.success ? data.data : [];
};

// Buyurtma yaratish
export const createOrder = async (order: Order): Promise<any> => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  return data;
};

// Mahsulot qo'shish (Admin)
export const addProduct = async (product: Omit<Product, 'id'>): Promise<any> => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};

// Mahsulotni o'chirish (Admin)
export const deleteProduct = async (id: string): Promise<any> => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};
