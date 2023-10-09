# Use a base Node.js image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your application will run on (replace 3000 with your application's port)
EXPOSE 3000

# Define the health check command
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD curl -f http://localhost:3000/ || exit 1

# Start the application
CMD ["npm", "run", "dev"]

