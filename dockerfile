# Use Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose Vite default port
EXPOSE 5173

# Run dev server
CMD ["npm", "run", "dev"]
