FROM	node:slim

# Step 1 - Add working directory
WORKDIR /app
# Step 2 - Copy code
COPY index.html /app/index.html
# Step 3 - Copy npm dependencies
COPY package.json /app/package.json
RUN npm install