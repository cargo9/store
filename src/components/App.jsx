import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { Products } from "../pages/Products";
import { Header } from "./Header";
import { Container } from "./App.styled";
import { CartProvider } from "../context/CartContext";
import { SearchProvider } from "../context/SearchContext";
import { AuthProvider } from "../context/AuthContext";
import { CartModal } from "./CartModal";
import { AuthModal } from "./AuthModal";
import { Toast } from "./Toast";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const AppContent = () => {
  const { isCartOpen, showToast, toastMessage, closeToast } = useCart();
  const { isAuthModalOpen } = useAuth();

  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Container>
      {isCartOpen && <CartModal />}
      {isAuthModalOpen && <AuthModal />}
      {showToast && <Toast message={toastMessage} onClose={closeToast} />}
    </>
  );
};

export const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </SearchProvider>
    </AuthProvider>
  );
};