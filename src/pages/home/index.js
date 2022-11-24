import CalendarioQuinta from "../../components/CalendarioQuinta";
import CalendarioSegunda from "../../components/CalendarioSegunda";
import Header from "../../components/header";
import { Container, Grid } from "./styled";

export default function Home() {
  return (
    <Container>
      <Header />
      <Grid>
        <CalendarioQuinta 
          data={'24/11'}
          semana={'QUINTA'}
          horario1={'07:00'}
          horario2={'13:00'}
          horario3={'16:00'}
        />
        <CalendarioSegunda 
         data={'28/11'}
          semana={'SEGUNDA'}
          horario1={'10:00'}
          horario2={'13:00'}
          horario3={'16:00'}
        />
      </Grid>
    </Container>
  );
}
