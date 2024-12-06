import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./ui/AppLayout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
