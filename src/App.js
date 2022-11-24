import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import { lightTheme} from "./theme/theme";
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Home/>
    </ThemeProvider>
  );
}

export default App;
