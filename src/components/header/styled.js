import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index:10;
  background-color: ${(props) => props.theme.header};
`;

export const Logo = styled.img`
  margin:2rem;
`;
