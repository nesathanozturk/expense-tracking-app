import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #7849f7;
  width: 100%;
  padding: 2rem;
  color: #f6f6f6;
  text-align: center;
`;

export const Text = styled.h1`
  font-size: 2.2rem;
  letter-spacing: 0.1rem;

  @media (width <= 768px) {
    font-size: 1.6rem;
  }
`;

export const Money = styled.span`
  color: #fff;
  text-decoration: underline;
`;
