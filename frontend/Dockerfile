# Build stage - create production assets
FROM node:18-alpine AS builder

# Set clean working directory path
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy application source
COPY . .

# Build the application
RUN npm run build

# Production stage - serve with nginx
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Apply nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]