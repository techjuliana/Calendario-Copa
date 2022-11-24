import {
  Container,
  Grid,
  Card,
  Data,
  Semana,
  Informacao,
  Pais,
  Base,
} from "./styled";
import brasil from "./../../assets/brazil.svg";
export default function CalendarioSegunda() {
  return (
    <Container>
      <Grid>
        <Card>
        <Base>
          <Data>24/11</Data>
          <Semana>QUINTA</Semana>
          </Base>
          <Informacao>
            <li>
              <Pais src={brasil} alt="pais" />
              <span>07:00</span>
              <Pais src={brasil} alt="pais" />
            </li>
            <li>
              <Pais src={brasil} alt="pais" />
              <span>13:00</span>
              <Pais src={brasil} alt="pais" />
            </li>
            <li>
              <Pais src={brasil} alt="pais" />
              <span>16:00</span>
              <Pais src={brasil} alt="pais" />
            </li>
          </Informacao>
        </Card>
      </Grid>
    </Container>
  );
}
