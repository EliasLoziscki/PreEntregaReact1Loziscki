import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
      <>
      <NavBar />
      <ItemListContainer greeting={`Bienvenido a Teot`}/>
      <ItemDetailContainer />
      </>
  );
}

export default App;