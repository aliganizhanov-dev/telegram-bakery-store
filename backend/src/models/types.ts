export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  category?: string;
  stock: number;
  created_at?: string;
}

export interface Order {
  id: string;
  user_id: number;
  username?: string;
  items: OrderItem[];
  total_price: number;
  delivery_address?: string;
  phone?: string;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  created_at?: string;
}

export interface OrderItem {
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
}

export interface User {
  telegram_id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  created_at?: string;
}
