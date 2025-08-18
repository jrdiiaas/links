import './App.css';
import LinksComponent from './Data/linksComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          LinksComponent.map((l) => (
            <div className='link-item' key={l.link}>
              <a
                href={l.link}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-btn"
              >
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
