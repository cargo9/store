import React from "react";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import { useAuth } from "../context/AuthContext";
import {
  Header as StyledHeader,
  Logo,
  Link,
  CartButton,
  CartBadge,
  SearchInput,
  LoginButton,
  UserInfo,
  LogoutButton
} from "./App.styled";

export const Header = () => {
  const { openCart, getTotalItems } = useCart();
  const { searchQuery, updateSearchQuery } = useSearch();
  const { user, isAuthenticated, openAuthModal, logout } = useAuth();
  const totalItems = getTotalItems();

  return (
    <StyledHeader>
      {isAuthenticated ? (
        <UserInfo>
          <span>👤 {user.username}</span>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        </UserInfo>
      ) : (
        <LoginButton onClick={openAuthModal}>
          👤 Login
        </LoginButton>
      )}

      <Logo>
        <span role="img" aria-label="computer icon">
          💻
        </span>
        GoMerch Store
      </Logo>
      <SearchInput
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => updateSearchQuery(e.target.value)}
      />
      <nav>
        <Link to="/" end>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <CartButton onClick={openCart}>
        🛒
        {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
      </CartButton>
    </StyledHeader>
  );
};