import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  CartItemsList,
  CartItem,
  CartItemImage,
  CartItemInfo,
  CartItemName,
  CartItemPrice,
  QuantityControls,
  QuantityButton,
  Quantity,
  RemoveButton,
  TotalSection,
  TotalLabel,
  TotalPrice,
  EmptyCart,
  BuyButton,
} from "./CartModal.styled";

export const CartModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    cartItems,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
  } = useCart();
  const { user, isAuthenticated } = useAuth();

  const handleCheckout = async () => {
    if (!isAuthenticated) {
      alert("Please login first");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/orders/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id || user.username,
          username: user.username,
          cartItems: cartItems,
          totalPrice: getTotalPrice(),
        }),
      });

      if (response.ok) {
        alert("Order sent to Telegram! ✓");
        closeCart();
      } else {
        const error = await response.json();
        alert("Error: " + (error.error || "Failed to send order"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalOverlay onClick={closeCart}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>Cart</h2>
          <CloseButton onClick={closeCart}>&times;</CloseButton>
        </ModalHeader>

        {cartItems.length === 0 ? (
          <EmptyCart>Your cart is empty</EmptyCart>
        ) : (
          <>
            <CartItemsList>
              {cartItems.map((item) => (
                <CartItem key={item.id}>
                  <CartItemImage src={item.image} alt={item.name} />
                  <CartItemInfo>
                    <CartItemName>{item.name}</CartItemName>
                    <CartItemPrice>${item.price.toFixed(2)}</CartItemPrice>
                  </CartItemInfo>
                  <QuantityControls>
                    <QuantityButton onClick={() => decreaseQuantity(item.id)}>
                      -
                    </QuantityButton>
                    <Quantity>{item.quantity}</Quantity>
                    <QuantityButton onClick={() => increaseQuantity(item.id)}>
                      +
                    </QuantityButton>
                  </QuantityControls>
                  <RemoveButton onClick={() => removeFromCart(item.id)}>
                    🗑️
                  </RemoveButton>
                </CartItem>
              ))}
            </CartItemsList>

            <TotalSection>
              <TotalLabel>Total:</TotalLabel>
              <TotalPrice>${getTotalPrice().toFixed(2)}</TotalPrice>
              <BuyButton onClick={handleCheckout} disabled={isLoading}>
                {isLoading ? "Sending..." : "Checkout"}
              </BuyButton>
            </TotalSection>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};
