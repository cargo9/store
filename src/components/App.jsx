import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { Products } from "../pages/Products";
import { Header } from "./Header"; 
import { Container } from "./App.styled"; 

export const App = () => {
  return (
    <Container>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Container>
  );
};