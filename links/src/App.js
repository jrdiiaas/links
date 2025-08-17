import logo from './logo.svg';
import './App.css';
import LinkComponent from './Data/linkComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>{LinkComponent.nome}</h1>
          <a href={LinkComponent.link} target="_blank" rel="noopener noreferrer">
            {LinkComponent.link}
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
