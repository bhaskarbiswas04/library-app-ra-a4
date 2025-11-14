import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import AddBookForm from './pages/AddBookForm';
import ViewBooks from './pages/ViewBooks';
import { BookProvider } from "./contexts/BookContext";

export default function App() {
  return (
    <BookProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ViewBooks />} />
          <Route path="/add-book" element={<AddBookForm />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}
