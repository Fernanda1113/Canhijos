import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar"

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
        <img src={logo} className="App-logo" alt="logo" />
        <StComponente />
        <p>
          Bienvenidos CanHijos
        </p>
      </header>
    </div>
  );
}

export default App;
