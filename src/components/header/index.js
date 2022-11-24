import { Container, Logo, Numeros } from "./styled";
import copa from "./../../assets/logo.svg"
import numeros from "./../../assets/number.svg"
export default function Header() {
  return (
    <div>
    <Container>
     <Logo src={copa} alt="logo copa" />
     <Numeros src={numeros} alt="numeros" />
    </Container>
    </div>
  );
}
