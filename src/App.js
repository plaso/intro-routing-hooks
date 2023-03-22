import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/misc/Navbar/Navbar";
import ThemeContext from "./contexts/ThemeContext";
import ErrorPage from "./views/ErrorPage/ErrorPage";
import Home from "./views/Home/Home";
import ManufacturerDetail from "./views/ManufacturerDetail/ManufacturerDetail";
import NewProduct from "./views/NewProduct/NewProduct";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Products from "./views/Products/Products";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div data-bs-theme={theme} className="App text-body bg-body min-vh-100">
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="products/new" element={<NewProduct />} />
          <Route path="manufacturers/:manufacturerId" element={<ManufacturerDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
