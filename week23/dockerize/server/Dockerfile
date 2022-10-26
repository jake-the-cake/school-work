FROM node:14-slim

# Step 4.1 - Add container working directory
WORKDIR /app

# Step 4.2 - Copy npm dependencies
COPY package.json /app/package.json

# Step 4.3 - Install dependencies
RUN npm install

# Copy app source code

COPY . .

#Expose port and start application

EXPOSE 8080

CMD ["npm", "start"]