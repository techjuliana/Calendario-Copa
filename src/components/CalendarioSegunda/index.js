import {
  Container,
  Card,
  Data,
  Semana,
  Informacao,
  Pais,
  Base,
  Centralizar,
} from "./styled";
import brasil from "./../../assets/brazil.svg";
import switzerland from "./../../assets/switzerland.svg";
import southkorea from "./../../assets/southkorea.svg";
import ghana from "./../../assets/ghana.svg";
import uruguay from "./../../assets/uruguay.svg";
import portugal from "./../../assets/portugal.svg";

export default function CalendarioSegunda() {
  return (
    <Container>
      <Card>
        <Centralizar>
          <Base>
            <Data>28/11</Data>
            <Semana>SEGUNDA</Semana>
          </Base>
          <Informacao>
            <li>
              <Pais src={southkorea} alt="pais" />
              <span>10:00</span>
              <Pais src={ghana} alt="pais" />
            </li>
            <li>
              <Pais src={brasil} alt="pais" />
              <span>13:00</span>
              <Pais src={switzerland} alt="pais" />
            </li>
            <li>
              <Pais src={portugal} alt="pais" />
              <span>16:00</span>
              <Pais src={uruguay} alt="pais" />
            </li>
          </Informacao>
        </Centralizar>
      </Card>
    </Container>
  );
}
