#!/bin/bash

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 TABRIKLAYMAN! Token muvaffaqiyatli qo'shildi!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📱 ENDI TELEGRAM ID NI OLISH KERAK:"
echo ""
echo "1️⃣  Telegram da @userinfobot ni oching"
echo "2️⃣  Botga /start yuboring"
echo "3️⃣  Bot sizga raqam beradi (masalan: 123456789)"
echo "4️⃣  O'sha raqamni shu yerga kiriting:"
echo ""
read -p "👤 Sizning Telegram ID: " ADMIN_ID
echo ""

# .env faylni yangilash
sed -i "s/ADMIN_TELEGRAM_ID=.*/ADMIN_TELEGRAM_ID=$ADMIN_ID/" ~/telegram-store/backend/.env

echo "✅ Telegram ID saqlandi!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 BOTNI ISHGA TUSHIRAMIZ!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "⏳ Iltimos kuting..."
echo ""

# Backend ishga tushirish
cd ~/telegram-store/backend
echo "📡 Backend ishga tushmoqda..."
npm run dev
