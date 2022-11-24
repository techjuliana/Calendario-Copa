import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.2rem;
`;

export const Card = styled.section`
  z-index: 5;
  padding-top: 1rem;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0.3rem;
  background: ${(props) => props.theme.card};
  width: 22rem;
  height: 26rem;
  border-bottom: 0.3rem solid ${(props) => props.theme.borda};
  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const Centralizar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Pais = styled.img`
  height: 4rem;
`;

export const Data = styled.section`
  color: ${(props) => props.theme.data};
  font-weight: 700;
  font-size: 20px;
`;

export const Semana = styled.section`
  font-size: 13px;
  margin: 0.2rem;
`;

export const Informacao = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-weight: 700;
    font-size: 1.8rem;
    position: relative;
    bottom: 20px;
    left: 0px;
    margin: 1.4em;
  }
  li {
    padding: 1rem;
    border-bottom: 1px solid #323238;
  }
`;

export const Base = styled.section`
  width: 8.6rem;
  border: 0.1rem solid ${(props) => props.theme.borda};
  border-radius: 5px;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Numeros = styled.img`
left: 1rem; 
bottom:9rem;
position: absolute;
  @media (max-width: 800px) {
    display: none;
  }
`;
