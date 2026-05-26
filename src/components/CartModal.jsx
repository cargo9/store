import React from "react";
import { useCart } from "../context/CartContext";
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
} from "./CartModal.styled";

export const CartModal = () => {
  const {
    cartItems,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
  } = useCart();

  return (
    <ModalOverlay onClick={closeCart}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>Корзина</h2>
          <CloseButton onClick={closeCart}>&times;</CloseButton>
        </ModalHeader>

        {cartItems.length === 0 ? (
          <EmptyCart>Корзина пуста</EmptyCart>
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
              <TotalLabel>Общая сумма:</TotalLabel>
              <TotalPrice>${getTotalPrice().toFixed(2)}</TotalPrice>
            </TotalSection>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};
