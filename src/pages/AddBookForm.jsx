import { useState } from "react";
import useBookContext from "../contexts/BookContext";

export default function AddBook() {
  const { addBook } = useBookContext();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("unread");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = { title, author, status };
    addBook(newBook);
    setSuccess("Book added successfully!");

    setTimeout(() => {
      setSuccess("");
    }, 2000);

    // Reset form
    setTitle("");
    setAuthor("");
    setStatus("unread");
  };

  return (
    <div style={{marginLeft: "16rem"}}>
      <h2>Add Book</h2>

      {success && (
        <p
          style={{
            background: "#d4ffd4",
            color: "green",
            padding: "10px 15px",
            borderRadius: "8px",
            fontWeight: "bold",
            marginBottom: "10px",
            width: "15rem",
          }}
        >
          {success}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <br />

        <label>Author: </label>
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <br />
        <br />

        {/* STATUS RADIO BUTTONS */}
        <label>Status: </label>
        <div style={{ marginTop: "5px", marginBottom: "15px" }}>
          <label style={{ marginRight: "1rem" }}>
            <input
              type="radio"
              name="status"
              value="read"
              checked={status === "read"}
              onChange={(e) => setStatus(e.target.value)}
            />
            Read
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="unread"
              checked={status === "unread"}
              onChange={(e) => setStatus(e.target.value)}
            />
            Unread
          </label>
        </div>

        <br />
        <br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
