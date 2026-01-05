# 🛍 Telegram Web App Do'kon

Telegram bot orqali ishlaydigantо'liq funksional do'kon. Backend (Node.js) va Frontend (React) bilan.

## 📋 Xususiyatlar

- ✅ Telegram Web App integratsiyasi
- ✅ Mahsulotlar katalogi
- ✅ Savatcha funksiyasi
- ✅ Buyurtma berish tizimi
- ✅ Admin panel (mahsulot qo'shish/boshqarish)
- ✅ SQLite ma'lumotlar bazasi
- ✅ Responsive dizayn

## 🚀 O'rnatish

### 1. Bot tokenni olish

BotFather dan bot yarating va tokenni oling.

### 2. Backend sozlash

```bash
cd backend
npm install

# .env faylni yaratish
cp .env.example .env

# .env faylda quyidagilarni to'ldiring:
# TELEGRAM_BOT_TOKEN=sizning_bot_token
# ADMIN_TELEGRAM_ID=sizning_telegram_id
```

### 3. Frontend sozlash

```bash
cd frontend
npm install
```

### 4. Ishga tushirish

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

## 📱 Telegram Bot Sozlamalari

1. BotFather da `/newbot` yoki `/mybots` ni tanlang
2. Bot sozlamalariga o'ting
3. **Menu Button** → **Edit Menu Button URL** → Frontend URL kiriting
   - Development: `http://localhost:5173`
   - Production: sizning domeningiz

## 🎯 Foydalanish

1. Telegram da botni ochib `/start` bosing
2. "🛍 Do'konni ochish" tugmasini bosing
3. Mahsulotlarni ko'ring va savatchaga qo'shing
4. Buyurtma bering

### Admin uchun:

1. `/start` bosing
2. "⚙️ Admin Panel" tugmasini bosing
3. Mahsulot qo'shish formasi ochiladi

## 📦 Mahsulot qo'shish

Admin panel orqali:
- Mahsulot nomi
- Tavsif
- Narx
- Rasm URL
- Kategoriya
- Miqdor (zaxira)

## 🛠 Texnologiyalar

**Backend:**
- Node.js + Express
- TypeScript
- node-telegram-bot-api
- better-sqlite3
- CORS

**Frontend:**
- React 18
- TypeScript
- Vite
- React Router
- Telegram Web Apps API

## 📝 API Endpoints

```
GET  /api/products        - Barcha mahsulotlar
GET  /api/products/:id    - Bitta mahsulot
POST /api/products        - Yangi mahsulot (Admin)
PUT  /api/products/:id    - Mahsulotni yangilash (Admin)
DELETE /api/products/:id  - Mahsulotni o'chirish (Admin)

GET  /api/orders          - Barcha buyurtmalar
POST /api/orders          - Yangi buyurtma
PATCH /api/orders/:id/status - Status yangilash
```

## 🔐 Xavfsizlik

- Admin ID tekshiruvi
- CORS sozlamalari
- Input validation

## 📄 Litsenziya

MIT

## 🤝 Yordam

Muammolar yoki savollar bo'lsa, Issue oching!
