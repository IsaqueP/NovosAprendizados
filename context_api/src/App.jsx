import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from './pages/Home'
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Context Api</h1>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
