import { Link } from "react-router-dom";
import { Container, CardWrapper, ProductInfo, ProductName, ProductPrice } from "./ProductList.styled";

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <Link to={`${product.id}`}>
            <img src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
            </ProductInfo>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
