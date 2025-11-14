
export default function Navbar() {
  return (
    <nav>
      <div className="logo">Library</div>
      <div className="links">
        <a href="/" className="nav-link">
          Add Book
        </a>
        <a href="/books" className="nav-link">
          All Books
        </a>
      </div>
    </nav>
  );
}
