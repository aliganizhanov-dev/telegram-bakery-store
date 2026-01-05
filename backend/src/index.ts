import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDatabase } from './db/database';
import { TelegramBotHandler } from './bot/telegram';
import { seedDatabase } from './utils/seed';
import apiRoutes from './api/routes';

// Environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ma'lumotlar bazasini ishga tushirish
initDatabase();
seedDatabase();

// API Routes
app.use('/api', apiRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Telegram Store Backend ishlamoqda!' 
  });
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT} portda ishlamoqda!`);
  console.log(`📡 API: http://localhost:${PORT}/api`);
});

// Telegram Bot
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const WEB_APP_URL = process.env.WEB_APP_URL || 'http://localhost:5173';
const ADMIN_ID = process.env.ADMIN_TELEGRAM_ID || '';

if (!BOT_TOKEN) {
  console.error('❌ TELEGRAM_BOT_TOKEN topilmadi! .env faylni tekshiring.');
  process.exit(1);
}

const bot = new TelegramBotHandler(BOT_TOKEN, WEB_APP_URL, ADMIN_ID);

export default app;
