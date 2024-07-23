# Use the official Node.js image with the specified version
FROM node:18.17.1

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port that the app runs on
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
