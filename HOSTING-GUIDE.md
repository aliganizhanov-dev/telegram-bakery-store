# 🌐 HOSTING - Botni Internetga Chiqarish

## 🆓 BEPUL HOSTING VARIANTLARI

### 1️⃣ **Render.com** (ENG OSON, TAVSIYA QILINADI)

**Narxi:** BEPUL (cheklash: 15 daqiqa ishlamasa, uxlaydi)

**Qadamlar:**

1. **render.com** ga kiring va ro'yxatdan o'ting (GitHub bilan)

2. **New** → **Web Service**

3. GitHub repository yarating va kodingizni yuklang:
```bash
cd ~/telegram-store
git init
git add .
git commit -m "Initial commit"
gh repo create telegram-store --public --source=. --push
```

4. Render.com da repositoryni tanlang

5. Sozlamalar:
```
Name: telegram-store-backend
Environment: Node
Build Command: cd backend && npm install && npm run build
Start Command: cd backend && npm start
```

6. Environment Variables qo'shing:
```
TELEGRAM_BOT_TOKEN = sizning_tokeningiz
ADMIN_TELEGRAM_ID = sizning_id
WEB_APP_URL = https://telegram-store-frontend.onrender.com
PORT = 3000
```

7. Frontend uchun ham xuddi shunday qiling

8. ✅ **TAYYOR!** Bot 24/7 ishlaydi

**Chegara:**
- 750 soat/oy BEPUL
- 15 daqiqa faol bo'lmasa uxlaydi (birinchi so'rov 30 soniya oladi)

---

### 2️⃣ **Railway.app** (Eng yaxshi, lekin cheklangan)

**Narxi:** $5 kredit BEPUL har oy

**Afzalliklari:**
- Tezroq
- Uxlamaydi
- Oson deploy

**Qadamlar:**

1. **railway.app** ga kiring (GitHub bilan)
2. **New Project** → **Deploy from GitHub repo**
3. Backend va Frontend uchun ikkita servis yarating
4. Environment variables qo'shing
5. ✅ **TAYYOR!**

---

### 3️⃣ **Vercel** (Frontend uchun) + **Railway** (Backend uchun)

**Frontend (Vercel):**
- ✅ BEPUL, cheksiz
- ✅ Juda tez

**Backend (Railway):**
- ✅ $5 kredit/oy

---

### 4️⃣ **VPS Server** (Professional variant)

**VPS Providers:**
- **Hetzner** - 4.5 EUR/oy (~$5)
- **DigitalOcean** - $4/oy (100$ kredit BEPUL 60 kun)
- **Vultr** - $2.5/oy

**Afzalliklari:**
- ✅ To'liq nazorat
- ✅ Cheklovlar yo'q
- ✅ Tezkor

---

## 🚀 ENG OSON VARIANT (TAVSIYA)

**Test uchun:** Render.com (BEPUL)
**Haqiqiy biznes uchun:** Railway yoki VPS

---

## 📱 NGROK (Tezkor test uchun)

Hozir o'z kompyuteringizdan testlash uchun:

```bash
# Ngrok o'rnatish
npm install -g ngrok

# Backend uchun tunnel ochish
ngrok http 3000
```

Bu sizga https URL beradi, uni BotFather da Menu Button URL ga qo'yishingiz mumkin.

**Chegara:**
- Faqat test uchun
- Kompyuter o'chirilsa, ishlamaydi
- URL har safar o'zgaradi

---

## 💡 MENING TAVSIYAM

1. **Hozir:** Kompyuterda test qiling (BEPUL)
2. **Keyinchalik:** Render.com ga deploy qiling (BEPUL)
3. **Agar ommalashsa:** Railway yoki VPS ga o'ting ($4-5/oy)

---

## 🔧 Production uchun o'zgarishlar

`.env` da:
```env
WEB_APP_URL=https://sizning-domeningiz.com
```

BotFather da Menu Button URL ham o'zgartiring:
```
https://sizning-domeningiz.com
```

---

## 📊 XARAJATLAR TAQQOSLASH

| Variant | Narx/oy | Afzallik | Kamchilik |
|---------|---------|----------|-----------|
| Lokal | $0 | Bepul | Kompyuter yoniq bo'lishi kerak |
| Render | $0 | Bepul, oson | 15 daq keyin uxlaydi |
| Railway | $5 | Yaxshi | Cheklangan kredit |
| VPS | $4-5 | Professional | O'rnatish qiyin |

---

## ❓ SAVOL: Qaysi birini tanlash kerak?

**Agar yangi boshlovchi bo'lsangiz:**
👉 **Render.com** - 100% BEPUL, oson

**Agar jiddiy biznes bo'lsa:**
👉 **Railway** yoki **VPS**

Men sizga har qaysi variantni o'rnatishda yordam bera olaman! 🚀
