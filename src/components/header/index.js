import { Container, Logo } from "./styled";
import copa from "./../../assets/logo.svg"
export default function Header() {
  return (
    <Container>
     <Logo src={copa} alt="logo copa" />
    </Container>
  );
}
