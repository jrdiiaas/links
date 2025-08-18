import logo from './logo.svg';
import './App.css';
import LinksComponent from './Data/linksComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          LinksComponent.map((l) => (
            <div>
              <h1>{l.nome}</h1>
              <a href={l.link} target="_blank" rel="noopener noreferrer">
                {l.nome}
              </a>
            </div>
          ))
        }
      </header>
    </div>
  );
}

export default App;
