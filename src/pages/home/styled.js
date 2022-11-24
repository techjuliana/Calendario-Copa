import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(30, 30, 30);
  background: linear-gradient(
    0deg,
    rgba(30, 30, 30, 1) 46%,
    rgba(33, 43, 56, 1) 59%,
    rgba(34, 50, 70, 1) 64%,
    rgba(41, 84, 137, 1) 100%,
    rgba(44, 98, 164, 1) 100%,
    rgba(46, 111, 190, 1) 100%,
    rgba(51, 138, 243, 1) 100%
  );
  @media (max-width: 800px) {
    height: 150vh;
  }
`;

export const Grid = styled.section`
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;
