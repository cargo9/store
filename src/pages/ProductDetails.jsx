import { useParams } from "react-router-dom";
import { getProductById } from "../fakeAPI";
import { useCart } from "../context/CartContext";
import {
  ProductDetailsContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  AddToCartButton
} from "./ProductDetails.styled";

export const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <ProductDetailsContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductTitle>
          {product.name}
        </ProductTitle>
        <h3 style={{ fontSize: '1.5rem', color: '#007bff', marginBottom: '20px' }}>
          ${product.price.toFixed(2)}
        </h3>
        <ProductDescription>
          {product.description}
        </ProductDescription>
        <AddToCartButton onClick={handleAddToCart}>
          Add to Cart
        </AddToCartButton>
      </ProductInfo>
    </ProductDetailsContainer>
  );
};
