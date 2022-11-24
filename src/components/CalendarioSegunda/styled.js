import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 13rem;
  /* background-repeat: no-repeat;
background: rgb(30,30,30);
background: linear-gradient(0deg, rgba(30,30,30,1) 46%, rgba(33,43,56,1) 59%, rgba(34,50,70,1) 64%, rgba(41,84,137,1) 100%, rgba(44,98,164,1) 100%, rgba(46,111,190,1) 100%, rgba(51,138,243,1) 100%); */
`;

export const Card = styled.section`
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

export const Grid = styled.section`
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
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
margin:0.2rem
`;

export const Informacao = styled.section`
display:flex;
flex-direction: column;
  span {
    font-weight: 700;
    font-size: 1.8rem;
  }
  li{
    margin:1.2rem;
  }
`;

export const Base = styled.section`
width:8.6rem;
 border: 0.1rem solid #338af3;
 border-radius:5px;
 margin:1rem;
 display:flex;
 flex-direction: row;
 justify-content:  space-evenly;
`;