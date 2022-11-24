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

export default function CalendarioSegunda({
  semana,
  data,
  horario1,
  horario2,
  horario3,
  pais1,
  pais2,
  pais3,
  pais4,
  pais5,
  pais6,
}) {
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
              <Pais src={pais1} alt="pais" />
              <span>{horario1}</span>
              <Pais src={pais2} alt="pais" />
            </li>
            <li>
              <Pais src={pais3} alt="pais" />
              <span>{horario2}</span>
              <Pais src={pais4} alt="pais" />
            </li>
            <li>
              <Pais src={pais5} alt="pais" />
              <span>{horario3}</span>
              <Pais src={pais6} alt="pais" />
            </li>
          </Informacao>
        </Centralizar>
      </Card>
    </Container>
  );
}
