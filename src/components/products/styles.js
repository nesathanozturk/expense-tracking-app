import styled from "styled-components";

export const Section = styled.section`
  padding: 1rem;
`;

export const Container = styled.section`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.5rem;
`;

export const ProductCardBox = styled.div`
  max-width: 18.75rem;
  padding: 3rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem 0.1rem #ccc;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImageBox = styled.div`
  width: 100%;
  min-height: 200px;
`;

export const ProductImage = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 0.5rem 0;
  text-align: center;
`;

export const ProductName = styled.h3`
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ProductBottom = styled.p`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 1rem;
  border: 1px solid #ccc;
`;

export const SellButton = styled.button`
  width: 9.375rem;
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 1rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const PurchaseButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;

export const ProductAmount = styled.p`
  padding: 0.2rem;
`;
