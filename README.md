# Bookstore App

This is a simple Bookstore web application built using the MERN (MongoDB, Express, React, Node.js) stack, along with Tailwind CSS for styling. The application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on a collection of books.

## Features

- **Browse Books:** View a list of available books.
- **Add New Book:** Add a new book to the collection.
- **Edit Book Details:** Modify the details of an existing book.
- **Delete Book:** Remove a book from the collection.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bookstore-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bookstore-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up the MongoDB connection:
   - Create a MongoDB database.
   - Copy the `.env.example` file to `.env` and update the `MONGODB_URI` with your database connection string.

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the Bookstore App.

## Directory Structure

- `/client`: Frontend code (React and Tailwind CSS).
- `/server`: Backend code (Node.js and Express).
- `/public`: Static assets.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests. Contributions are always welcome!

## License

This project is licensed under the [MIT License](LICENSE).
