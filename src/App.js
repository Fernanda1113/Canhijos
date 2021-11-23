import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer';
//import icono from './components/CartWidget';

const StComponente = () => {
  return(
    <h1>Primer componente</h1>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={'Hola, Bienvenido'} />
        <img src={'./logoCanhijo.png'}/>
        <StComponente />
        <p>
          Bienvenidos CanHijos
        </p>
      </header>
    </div>
  );
}

export default App;
