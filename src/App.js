import logo from './logo.svg';
import './App.css';

import SplashScreen from 'hy-splash-screen-react';

function App() {
  return (
    <div className="App">
	
	  <SplashScreen src={logo} text="Your Company"/>
    
	  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<h2>Reload Pages To See</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/fitri-hy/hy-splash-screen-react.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Install Package
        </a>
      </header>
    </div>
  );
}

export default App;
