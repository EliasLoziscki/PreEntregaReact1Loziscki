import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
      <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Teot" />
      </>
  );
}

export default App;
