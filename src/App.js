import CCoffee from "./components/CCoffee";
import FCoffee from "./components/FCoffee";

function App() {
  return (
    <>
    {/* Class components */}
    <CCoffee   firstName='Carlie' />
    {/* function components */}
    <FCoffee firstName='Carlie'/>
    </>
  );
}

export default App;
