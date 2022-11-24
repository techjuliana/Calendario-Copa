import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Logo = styled.img`
  margin: 3rem;
`;

export const Numeros = styled.img`
  right: 50px;
  position: absolute;

  @media (max-width: 800px) {
    display: none;
  }
`;
