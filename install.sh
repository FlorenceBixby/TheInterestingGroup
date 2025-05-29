#!/bin/bash

# This script installs Node.js dependencies for the project.

echo "--- Starting dependency installation ---"

# Run npm install
npm install

# Check if the installation was successful
if [ $? -eq 0 ]; then
  echo "--- Dependencies installed successfully! ---"
  echo "You can now run 'npm start' to start the development server."
else
  echo "--- Error: Failed to install dependencies. Please check the output above. ---"
  echo "Make sure you have Node.js and npm installed."
fi

