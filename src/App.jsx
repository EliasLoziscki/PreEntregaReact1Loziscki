import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
      <>
      <NavBar />
      <ItemListContainer greeting={`Bienvenido a Teot`}/>
      <ItemCount initial={1} stock={10} onAdd={(quantify) => console.log('cantidad agregada ', quantify)} />
      </>
  );
}

export default App;