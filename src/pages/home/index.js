import CalendarioQuinta from "../../components/CalendarioQuinta";
import CalendarioSegunda from "../../components/CalendarioSegunda";
import Header from "../../components/header";
import { Container, Grid } from "./styled";

export default function Home() {
  return (
    <Container>
      <Header />
      <Grid>
        <CalendarioQuinta />
        <CalendarioSegunda />
      </Grid>
    </Container>
  );
}
