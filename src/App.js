//import logo from './logo.svg';
import "./App.css";
import Headerr from "./components/Layout/Headerr";
import Tshirt from "./components/Tshirts/Tshirt";

function App() {
  return (
    <>
      <Headerr></Headerr>
      <main>
        <Tshirt></Tshirt>
      </main>
    </>
  );
}

export default App;
