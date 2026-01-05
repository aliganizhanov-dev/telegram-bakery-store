import db from '../db/database';
import { Product } from './types';
import { v4 as uuidv4 } from 'uuid';

export class ProductModel {
  // Barcha mahsulotlarni olish
  static getAll(): Product[] {
    return db.products.get();
  }

  // ID bo'yicha mahsulot olish
  static getById(id: string): Product | undefined {
    const products = db.products.get();
    return products.find((p: Product) => p.id === id);
  }

  // Kategoriya bo'yicha mahsulotlar
  static getByCategory(category: string): Product[] {
    const products = db.products.get();
    return products.filter((p: Product) => p.category === category);
  }

  // Yangi mahsulot qo'shish
  static create(product: Omit<Product, 'id' | 'created_at'>): Product {
    const products = db.products.get();
    const newProduct: Product = {
      id: uuidv4(),
      ...product,
      created_at: new Date().toISOString(),
    };
    products.push(newProduct);
    db.products.set(products);
    return newProduct;
  }

  // Mahsulotni yangilash
  static update(id: string, updates: Partial<Product>): boolean {
    const products = db.products.get();
    const index = products.findIndex((p: Product) => p.id === id);
    
    if (index === -1) return false;
    
    products[index] = { ...products[index], ...updates };
    db.products.set(products);
    return true;
  }

  // Mahsulotni o'chirish
  static delete(id: string): boolean {
    const products = db.products.get();
    const filtered = products.filter((p: Product) => p.id !== id);
    
    if (filtered.length === products.length) return false;
    
    db.products.set(filtered);
    return true;
  }
}
