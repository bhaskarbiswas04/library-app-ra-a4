import { useState } from "react";
import useBookContext from "../contexts/BookContext";

export default function ViewBooks() {
  const { books, toggleStatus, deleteBook } = useBookContext();
  const [filter, setFilter] = useState("all");

  const filteredBooks =
    filter === "all" ? books : books.filter((book) => book.status === filter);

  // common style for all buttons
  const filterButtonStyle = {
    padding: "8px 12px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
    background: "lightgray",
    color: "black",
  };

  return (
    <>
      <h2>All Books</h2>

      {/* Filter Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("all")} style={filterButtonStyle}>
          All Books ({books.length})
        </button>

        <button onClick={() => setFilter("read")} style={filterButtonStyle}>
          Read ({books.filter((b) => b.status === "read").length})
        </button>

        <button onClick={() => setFilter("unread")} style={filterButtonStyle}>
          Unread ({books.filter((b) => b.status === "unread").length})
        </button>
      </div>

      {/* Book List Display */}
      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.title}>
              <strong>{book.title}</strong>
              <br />
              Author: {book.author}
              <br />
              Status: {book.status}
              <br />
              <button onClick={() => toggleStatus(book.title)}>
                Mark as {book.status === "read" ? "Unread" : "Read"}
              </button>
              <button
                onClick={() => deleteBook(book.title)}
                style={{ marginLeft: "10px", backgroundColor: "#ff6666" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
