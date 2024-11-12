# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /workspace/holbertondavid/holbertonschool-web_back_end

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Jest as a development dependency
RUN npm install --save-dev jest

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (adjust as needed)
EXPOSE 3000

# Command to run the app (adjust as needed)
CMD ["npm", "start"]

