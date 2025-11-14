import "./App.css";

import AddBookForm from './pages/AddBookForm';
import ViewBooks from './pages/ViewBooks';
import { BookProvider } from "./contexts/BookContext";

export default function App() {
  return (
    <BookProvider>
      <h1>Personal Library</h1>
      <AddBookForm />
      <hr />
      <ViewBooks />
    </BookProvider>
  );
}
