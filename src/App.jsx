import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={`Bienvenido a Teot`}/>}  />
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>


          <Route path='*' element={<h1 className='text-center'>Page not found: 404</h1>}/>
          {/* <Route path='' element={}/> */}
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;