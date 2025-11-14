export default function Navbar() {
  return (
    <nav>
      <div className="logo">Personal Library</div>
      <div className="links">
        <a href="/" className="nav-link">
          All Books
        </a>
        <a href="/add-book" className="nav-link">
          Add Book
        </a>
      </div>
    </nav>
  );
}
