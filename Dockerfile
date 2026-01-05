# Backend Dockerfile for Render.com
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy backend package files
COPY backend/package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy backend source code
COPY backend/ ./

# Build TypeScript
RUN npm install typescript @types/node && npm run build

# Expose port
EXPOSE 10000

# Start application
CMD ["node", "dist/index.js"]
