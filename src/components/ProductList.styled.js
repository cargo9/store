import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  padding: 20px;
`;

export const CardWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  > a {
    text-decoration: none;
    display: block;
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    background-color: #f8f9fa;
  }
`;

export const ProductInfo = styled.div`
  padding: 16px;
`;

export const ProductName = styled.h3`
  margin: 0 0 8px 0;
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const ProductPrice = styled.span`
  display: block;
  color: #007bff;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 8px;
`;
