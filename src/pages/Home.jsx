import React from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../fakeAPI"; 

import {
  HomeContainer,
  Hero,
  SectionTitle,
  ProductGrid,
  ProductCard,
} from "./Home.styled";

export const Home = () => {
  const allProducts = getProducts ? getProducts() : []; 

  const topProducts = allProducts.slice(0, 4);

  return (
    <HomeContainer>
      <Hero>
        <h1>Welcome to GoMerch Store</h1>
        <p>
          Your exclusive merch and street style in one place. Choose the best,
          quality guaranteed by our developers.
        </p>
      </Hero>

     <SectionTitle>Top Products</SectionTitle>

      <ProductGrid>
        {topProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProductCard>
              <img
                src={product.image}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <span>${product.price.toFixed(2)}</span>
            </ProductCard>
          </Link>
        ))}
      </ProductGrid>
    </HomeContainer>
  );
};