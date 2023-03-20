import { BrowserRouter, Routes, Route } from "react-router-dom";

// Css file
import './App.css';

// Pages
import Home from './pages/Home/Home'
import Details from "./pages/Details/Details";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
