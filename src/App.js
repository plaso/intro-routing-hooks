import { Route, Routes } from "react-router-dom";
import Navbar from "./components/misc/Navbar/Navbar";
import ErrorPage from "./views/ErrorPage/ErrorPage";
import Home from "./views/Home/Home";
import ManufacturerDetail from "./views/ManufacturerDetail/ManufacturerDetail";
import NewProduct from "./views/NewProduct/NewProduct";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Products from "./views/Products/Products";

function App() {
  return (
    <div className="App text-bg-light min-vh-100">
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
