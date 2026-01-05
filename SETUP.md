# 🚀 TELEGRAM STORE - Sozlash Qo'llanmasi

## 1️⃣ Bot Tokenni Olish

1. Telegram da **@BotFather** ni oching
2. `/newbot` buyrug'ini yuboring
3. Bot nomini kiriting (masalan: "Mening Do'konim")
4. Bot username kiriting (masalan: "mening_dokonim_bot")
5. BotFather sizga **TOKEN** beradi, uni saqlang!

## 2️⃣ Telegram ID ni Olish

1. Telegram da **@userinfobot** ni oching
2. Botga `/start` yuboring
3. Sizning **Telegram ID** raqamingizni ko'rsatadi
4. Bu raqamni saqlang (Admin uchun kerak)

## 3️⃣ Backend Sozlash

```bash
cd ~/telegram-store/backend

# .env faylni tahrirlash
nano .env
```

`.env` faylga quyidagilarni yozing:

```env
TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
PORT=3000
WEB_APP_URL=http://localhost:5173
ADMIN_TELEGRAM_ID=123456789
```

**Eslatma:** 
- `TELEGRAM_BOT_TOKEN` - BotFather dan olgan token
- `ADMIN_TELEGRAM_ID` - Sizning Telegram ID

## 4️⃣ Web App URL Sozlash

1. @BotFather ga qayting
2. `/mybots` ni tanlang
3. O'z botingizni tanlang
4. **Bot Settings** → **Menu Button** → **Edit Menu Button URL**
5. URL kiriting: `http://localhost:5173` (Development uchun)

## 5️⃣ Ishga Tushirish

### Terminal 1 - Backend:
```bash
cd ~/telegram-store/backend
npm run dev
```

### Terminal 2 - Frontend:
```bash
cd ~/telegram-store/frontend
npm run dev
```

## 6️⃣ Testlash

1. Telegram da botingizni oching
2. `/start` buyrug'ini yuboring
3. **"🛍 Do'konni ochish"** tugmasini bosing
4. Do'kon ochilishi kerak!

## 🎉 Tayyor!

Endi sizda to'liq ishlaydigan Telegram do'kon bor!

### Keyingi Qadamlar:

- ✅ Admin panel orqali mahsulot qo'shing
- ✅ Mahsulotlar rasmlari uchun online URL ishlatiladi
- ✅ Buyurtmalar avtomatik saqlanadi
- ✅ Mijozlar telefon va manzil yozib buyurtma beradi

### Xatolik yuz bersa:

1. Backend terminallda xato ko'rsatsa, `.env` faylni tekshiring
2. Frontend ochilmasa, backend ishlaganini tekshiring
3. Bot javob bermasa, TOKEN to'g'riligini tekshiring

---

📚 Barcha ma'lumotlar `~/telegram-store/backend/data/` papkasida saqlanadi.
