#!/bin/bash

echo "🤖 TELEGRAM STORE BOT - SOZLASH"
echo "================================"
echo ""

# .env faylni tekshirish
if [ ! -f "backend/.env" ]; then
    echo "❌ .env fayl topilmadi!"
    echo ""
    echo "🔧 .env faylni yaratyapman..."
    cp backend/.env.example backend/.env
    echo "✅ .env fayl yaratildi!"
    echo ""
    echo "📝 Iltimos, quyidagi ma'lumotlarni kiriting:"
    echo ""
    
    read -p "Bot Token (BotFather dan): " BOT_TOKEN
    read -p "Sizning Telegram ID (@userinfobot dan): " ADMIN_ID
    
    # .env faylga yozish
    cat > backend/.env << EOF
TELEGRAM_BOT_TOKEN=$BOT_TOKEN
PORT=3000
WEB_APP_URL=http://localhost:5173
ADMIN_TELEGRAM_ID=$ADMIN_ID
EOF
    
    echo ""
    echo "✅ Sozlamalar saqlandi!"
else
    echo "✅ .env fayl mavjud"
fi

echo ""
echo "🚀 Botni ishga tushiryapman..."
echo ""

# Backend va frontend ni parallel ishga tushirish
echo "📡 Backend ishga tushmoqda..."
cd backend && npm run dev &
BACKEND_PID=$!

echo "🎨 Frontend ishga tushmoqda..."
cd ../frontend && npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Bot ishga tushdi!"
echo ""
echo "📱 Endi Telegram da botingizni oching va /start bosing!"
echo ""
echo "❌ To'xtatish uchun Ctrl+C bosing"
echo ""

# Wait for Ctrl+C
trap "kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
