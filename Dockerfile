# Use a base Node.js image
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your application will run on (replace 3000 with your application's port)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]

