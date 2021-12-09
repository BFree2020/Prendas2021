import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Product/Product'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
