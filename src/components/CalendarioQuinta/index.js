import {
  Container,
  Card,
  Data,
  Semana,
  Informacao,
  Pais,
  Base,
  Centralizar
} from "./styled";
import brasil from "./../../assets/brazil.svg";
import cameroon from "./../../assets/cameroon.svg";
import switzerland from "./../../assets/switzerland.svg";
import ghana from "./../../assets/ghana.svg";
import portugal from "./../../assets/portugal.svg";
import serbia from "./../../assets/serbia.svg";

export default function CalendarioQuinta() {
  return (
    <Container>
      <Card>
      <Centralizar>
        <Base>
          <Data>24/11</Data>
          <Semana>QUINTA</Semana>
        </Base>
        <Informacao>
          <li>
            <Pais src={switzerland} alt="pais" />
            <span>07:00</span>
            <Pais src={cameroon} alt="pais" />
          </li>
          <li>
            <Pais src={portugal} alt="pais" />
            <span>13:00</span>
            <Pais src={ghana} alt="pais" />
          </li>
          <li>
            <Pais src={brasil} alt="pais" />
            <span>16:00</span>
            <Pais src={serbia} alt="pais" />
          </li>
        </Informacao>
        </Centralizar>
      </Card>
    </Container>
  );
}
