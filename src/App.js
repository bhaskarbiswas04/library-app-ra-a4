// import logo from './logo.svg';
// import './App.css';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BookProvider } from "./contexts/BookContext";
// import Navbar from './components/Navbar';
// import AddBookForm from './components/AddBookForm';
// import ViewBooks from './pages/ViewBooks';

// function App() {
//   return (
//     <BookProvider>
//       <Navbar />
//       <Router>
//         <Routes>
//           <Route path="/" element={<AddBookForm />} />
//           <Route path="/books" element={<ViewBooks />} />
//         </Routes>
//       </Router>
//     </BookProvider>
//   );
// }

// export default App;

import "./App.css";

import AddBookForm from './components/AddBookForm';
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
