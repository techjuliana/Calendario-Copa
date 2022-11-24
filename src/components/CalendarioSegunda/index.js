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

export default function CalendarioSegunda({semana, data, horario1, horario2, horario3}) {
  return (
    <Container>
      <Card>
        <Centralizar>
          <Base>
            <Data>{data}</Data>
            <Semana>{semana}</Semana>
          </Base>
          <Informacao>
            <li>
              <Pais src={southkorea} alt="pais" />
              <span>{horario1}</span>
              <Pais src={ghana} alt="pais" />
            </li>
            <li>
              <Pais src={brasil} alt="pais" />
              <span>{horario2}</span>
              <Pais src={switzerland} alt="pais" />
            </li>
            <li>
              <Pais src={portugal} alt="pais" />
              <span>{horario3}</span>
              <Pais src={uruguay} alt="pais" />
            </li>
          </Informacao>
        </Centralizar>
      </Card>
    </Container>
  );
}
