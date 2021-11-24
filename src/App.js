import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer';


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
        
        <img src={'./logoCanhijo.png'}/>
        <StComponente />

        <p>
          Bienvenidos CanHijos
        </p>
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
