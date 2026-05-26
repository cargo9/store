import styled from "styled-components";

export const ProductDetailsContainer = styled.main`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 30px;
  background-color: #f8f9fa;
`;

export const ProductInfo = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const ProductTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const ProductDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 30px;
`;

export const AddToCartButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
