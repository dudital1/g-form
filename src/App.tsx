import GenericForm from "./components/Form/Form";
import { mockFormInputs, mockSchema } from "./components/Form/mockFormConfig";

function App() {
  return (
    <GenericForm
      onSubmit={(d) => console.log(d)}
      inputs={mockFormInputs}
      schema={mockSchema}
    />
  );
}

export default App;
