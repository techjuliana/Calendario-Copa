import CalendarioQuinta from "../../components/CalendarioQuinta";
import CalendarioSegunda from "../../components/CalendarioSegunda";
import Header from "../../components/header";
import southkorea from "./../../assets/southkorea.svg";
import ghana from "./../../assets/ghana.svg";
import brazil from "./../../assets/brazil.svg";
import switzerland from "./../../assets/switzerland.svg";
import uruguay from "./../../assets/uruguay.svg";
import portugal from "./../../assets/portugal.svg";
import cameroon from "./../../assets/cameroon.svg";
import serbia from "./../../assets/serbia.svg";

import { Container, Grid } from "./styled";
export default function Home() {
  return (
    <Container>
      <Header />
      <Grid>
        <CalendarioQuinta
          data={"24/11"}
          semana={"QUINTA"}
          horario1={"07:00"}
          horario2={"13:00"}
          horario3={"16:00"}
          pais1={switzerland}
          pais2={cameroon}
          pais3={portugal}
          pais4={ghana}
          pais5={brazil}
          pais6={serbia}
        />
        <CalendarioSegunda
          data={"28/11"}
          semana={"SEGUNDA"}
          horario1={"10:00"}
          horario2={"13:00"}
          horario3={"16:00"}
          pais1={southkorea}
          pais2={ghana}
          pais3={brazil}
          pais4={switzerland}
          pais5={portugal}
          pais6={uruguay}
        />
      </Grid>
    </Container>
  );
}
