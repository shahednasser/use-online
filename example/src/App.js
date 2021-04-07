import logo from './logo.svg';
import './App.css';
import useOnline from 'use-online'

function App() {
  const online = useOnline()
  
  return (
    <div className="App">
      <header className="App-header">
        {!online && <p>You're Offline</p>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
