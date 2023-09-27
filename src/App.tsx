import GenericForm from "./components/Form/Form";
import { mockFormInputs } from "./components/Form/mockFormConfig";
import { Header } from "./components/Header/Header";
import { GlobalStyles } from "./design-system/GlobalStyles/GlobalStyles";
import { FlexColumn } from "./design-system/Flex/Flex";
import { StyledComponentsThemeProvider } from "./design-system/StyledComponentsThemeProvider /StyledComponentsThemeProvider ";

function App() {
  return (
    <StyledComponentsThemeProvider>
      <FlexColumn>
        <GlobalStyles />
        {/* <Header /> */}
        <GenericForm onSubmit={(d) => console.log(d)} inputs={mockFormInputs} />
      </FlexColumn>
    </StyledComponentsThemeProvider>
  );
}

export default App;
