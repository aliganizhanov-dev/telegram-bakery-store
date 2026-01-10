# 🤖 BOT YARATISH VA SOZLASH - Bosqichma-bosqich

## BOSQICH 1: Bot Yaratish

1. Telegram da **@BotFather** ni qidiring va oching
2. Quyidagi buyruqlarni ketma-ket yuboring:

```
/start
/newbot
```

3. Bot nomini kiriting (masalan):
```
Mening Do'konim
```

4. Bot username kiriting (masalan, `_bot` bilan tugashi kerak):
```
mening_dokonim_bot
```

5. ✅ BotFather sizga **TOKEN** beradi. Masalan:
```
8386187963:AAGuxwEQxu9b_BtVuBQXF7MnQgHlweVKsMI
```

⚠️ **BU TOKENNI SAQLANG!** Bu botning paroli kabi.

---

## BOSQICH 2: Telegram ID ni Olish (Admin uchun)

1. Telegram da **@userinfobot** ni qidiring va oching
2. `/start` ni bosing
3. Bot sizga raqamlarni ko'rsatadi:
```
Id: 123456789  <-- BU SIZNING TELEGRAM ID
```

⚠️ **BU RAQAMNI HAM SAQLANG!**

---

## BOSQICH 3: Tokenni Loyihaga Qo'shish

Terminal da quyidagini bajaring:

```bash
cd ~/telegram-store/backend
nano .env
```

Quyidagilarni yozing (o'z tokenlaringizni qo'ying):

```env
TELEGRAM_BOT_TOKEN=8386187963:AAGuxwEQxu9b_BtVuBQXF7MnQgHlweVKsMI
PORT=3000
WEB_APP_URL=http://localhost:5173
ADMIN_TELEGRAM_ID=123456789
```

**Ctrl+O** (saqlash), **Enter**, **Ctrl+X** (chiqish)

---

## BOSQICH 4: Bot Sozlamalarini O'rnatish

1. **@BotFather** ga qayting
2. Quyidagi buyruqlarni yuboring:

```
/mybots
```

3. O'z botingizni tanlang

4. **Bot Settings** → **Menu Button** → **Configure Menu Button**

5. **Edit Menu Button URL** ni tanlang

6. URL kiriting:
```
http://localhost:5173
```
(Hozircha local test uchun)

7. ✅ Tayyor!

---

## BOSQICH 5: Ishga Tushirish

### Terminal 1 - Backend:
```bash
cd ~/telegram-store/backend
npm run dev
```

Ko'rinishi:
```
✅ Ma'lumotlar bazasi tayyor!
✅ Demo mahsulotlar qo'shildi!
🚀 Server 3000 portda ishlamoqda!
✅ Telegram bot ishga tushdi!
```

### Terminal 2 - Frontend:
```bash
cd ~/telegram-store/frontend
npm run dev
```

Ko'rinishi:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.10:5173/
```

---

## BOSQICH 6: Test Qilish

1. Telegram da o'z botingizni oching
2. `/start` ni bosing
3. **"🛍 Do'konni ochish"** tugmasi ko'rinishi kerak
4. Tugmani bosing - Web App ochiladi!

---

## 🎉 MUVAFFAQIYATLI!

Agar hammasi ishlab tursa:
- ✅ 6 ta demo mahsulot ko'rinadi
- ✅ Mahsulotlarni savatchaga qo'sha olasiz
- ✅ Buyurtma bera olasiz

---

## ❌ MUAMMOLAR?

**Bot javob bermasa:**
- Token to'g'ri kiritilganini tekshiring
- Backend ishlaganini tekshiring

**Web App ochilmasa:**
- Menu Button URL to'g'riligini tekshiring
- Frontend ishlaganini tekshiring

**Mahsulotlar ko'rinmasa:**
- Backend terminal da "Demo mahsulotlar qo'shildi" yozuvini qidiring
