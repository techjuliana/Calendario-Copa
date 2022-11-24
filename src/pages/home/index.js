import CalendarioSegunda from "../../components/CalendarioSegunda";
import Header from "../../components/header";
import { Container } from "./styled";
export default function Home() {
  return (
    <Container>
      <Header />
      <CalendarioSegunda />
    </Container>
  );
}
