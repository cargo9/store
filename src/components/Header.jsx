import React from "react";

import { Header as StyledHeader, Logo, Link } from "./App.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <span role="img" aria-label="computer icon">
          💻
        </span>
        GoMerch Store
      </Logo>
      <nav>
        <Link to="/" end>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
    </StyledHeader>
  );
};