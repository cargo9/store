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
          Твой эксклюзивный мерч и уличный стиль в одном месте. Выбирай лучшее, 
          качество гарантировано нашими разработчиками.
        </p>
      </Hero>

     <SectionTitle>ТОП вещей</SectionTitle>

      <ProductGrid>
        {topProducts.map((product) => (
          <Link 
            to={`/products/${product.id}`} 
            key={product.id}
            style={{ textDecoration: "none", color: "inherit" }} 
          >
            <ProductCard>
              <img 
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80" 
                alt={product.name} 
              />
              <h3>{product.name}</h3>
              <span>$45.00</span> 
            </ProductCard>
          </Link>
        ))}
      </ProductGrid>
    </HomeContainer>
  );
};