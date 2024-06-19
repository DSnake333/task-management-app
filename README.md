# Task Management App

A simple task management application built with React, Axios, and React Testing Library.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [MongoDB Atlas Setup](#mongodb-atlas-setup)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/task-management-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd task-management-app/client
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Testing

1. To run the tests, use the following command:

    ```bash
    npm test
    ```

## MongoDB Atlas Setup

To use the application with MongoDB Atlas, follow these steps:

1. **Create a MongoDB Atlas Account**: If you haven't already, [sign up for a free MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register).

2. **Create a Cluster**: After logging in to MongoDB Atlas, create a new cluster. Follow the instructions provided by MongoDB Atlas to configure your cluster and choose a cloud provider and region.

3. **Database Configuration**: Configure your MongoDB Atlas database. Create a database and collections suitable for your application. Note down the connection string provided by MongoDB Atlas.

4. **Connection Setup**:
    - In your project directory, locate the server configuration files (if applicable) where the MongoDB connection string needs to be set (often found in `server/config` or similar).
    - Update the connection string in your application code to point to your MongoDB Atlas cluster. Replace the placeholder values with your MongoDB Atlas credentials.

5. Make sure the server is running by using `npm start` in the server directory.

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.
