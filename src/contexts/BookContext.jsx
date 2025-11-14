import { createContext, useContext, useState, useEffect } from "react";

const BookContext = createContext();

const initialBooksData = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    status: "read",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    status: "unread",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    status: "read",
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    status: "unread",
  },
];

export function BookProvider({ children }) {
  // Load from localStorage OR fallback to initial books
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : initialBooksData;
  });

  // Save to localStorage whenever "books" changes
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const toggleStatus = (title) => {
    setBooks(
      books.map((book) =>
        book.title === title
          ? { ...book, status: book.status === "read" ? "unread" : "read" }
          : book
      )
    );
  };

  const deleteBook = (title) => {
    setBooks(books.filter((book) => book.title !== title));
  };

  return (
    <BookContext.Provider value={{ books, addBook, toggleStatus, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
}

const useBookContext = () => useContext(BookContext);
export default useBookContext;
