import db from '../db/database';
import { Order } from './types';
import { v4 as uuidv4 } from 'uuid';

export class OrderModel {
  // Barcha buyurtmalarni olish
  static getAll(): Order[] {
    return db.orders.get();
  }

  // Foydalanuvchi buyurtmalarini olish
  static getByUserId(userId: number): Order[] {
    const orders = db.orders.get();
    return orders.filter((o: Order) => o.user_id === userId);
  }

  // ID bo'yicha buyurtma olish
  static getById(id: string): Order | undefined {
    const orders = db.orders.get();
    return orders.find((o: Order) => o.id === id);
  }

  // Yangi buyurtma yaratish
  static create(order: Omit<Order, 'id' | 'created_at' | 'status'>): Order {
    const orders = db.orders.get();
    const newOrder: Order = {
      id: uuidv4(),
      ...order,
      status: 'pending',
      created_at: new Date().toISOString(),
    };
    orders.push(newOrder);
    db.orders.set(orders);
    return newOrder;
  }

  // Buyurtma statusini yangilash
  static updateStatus(id: string, status: Order['status']): boolean {
    const orders = db.orders.get();
    const index = orders.findIndex((o: Order) => o.id === id);
    
    if (index === -1) return false;
    
    orders[index].status = status;
    db.orders.set(orders);
    return true;
  }

  // Buyurtmani o'chirish
  static delete(id: string): boolean {
    const orders = db.orders.get();
    const filtered = orders.filter((o: Order) => o.id !== id);
    
    if (filtered.length === orders.length) return false;
    
    db.orders.set(filtered);
    return true;
  }
}
