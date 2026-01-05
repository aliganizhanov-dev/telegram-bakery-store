import fs from 'fs';
import path from 'path';

const DB_DIR = path.join(__dirname, '../../data');
const PRODUCTS_FILE = path.join(DB_DIR, 'products.json');
const ORDERS_FILE = path.join(DB_DIR, 'orders.json');
const USERS_FILE = path.join(DB_DIR, 'users.json');

// Ma'lumotlar bazasini yaratish
export const initDatabase = () => {
  // Data papkasini yaratish
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }

  // Fayllarni yaratish
  if (!fs.existsSync(PRODUCTS_FILE)) {
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(ORDERS_FILE)) {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
  }

  console.log('✅ Ma\'lumotlar bazasi tayyor!');
};

// JSON fayllarni o'qish va yozish funksiyalari
export const readJSON = (filePath: string) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

export const writeJSON = (filePath: string, data: any) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const db = {
  products: {
    get: () => readJSON(PRODUCTS_FILE),
    set: (data: any) => writeJSON(PRODUCTS_FILE, data),
  },
  orders: {
    get: () => readJSON(ORDERS_FILE),
    set: (data: any) => writeJSON(ORDERS_FILE, data),
  },
  users: {
    get: () => readJSON(USERS_FILE),
    set: (data: any) => writeJSON(USERS_FILE, data),
  },
};

export default db;
