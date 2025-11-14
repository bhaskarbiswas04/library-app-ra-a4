import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBookForm from './components/AddBookForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddBookForm />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
