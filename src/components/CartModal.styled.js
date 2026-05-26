import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  line-height: 1;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #000;
  }
`;

export const CartItemsList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CartItemInfo = styled.div`
  flex: 1;
`;

export const CartItemName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1rem;
`;

export const CartItemPrice = styled.p`
  margin: 0;
  color: #007bff;
  font-weight: 600;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #007bff;
  background: white;
  color: #007bff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: #007bff;
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Quantity = styled.span`
  font-weight: 600;
  min-width: 30px;
  text-align: center;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  opacity: 0.6;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-top: 2px solid #e0e0e0;
  background: #f9f9f9;
`;

export const TotalLabel = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const TotalPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #007bff;
`;

export const EmptyCart = styled.div`
  padding: 60px 20px;
  text-align: center;
  color: #666;
  font-size: 1.2rem;
`;
