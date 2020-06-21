import React from 'react';
import logo from './logo.svg';
import { Trans } from '@lingui/macro';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans>Edit <code>src/App.js</code> and save to reload.</Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans>Learn React</Trans>
        </a>

        <p><Trans>Select your language:</Trans></p>
        <select>
          <option value="en"><Trans>English</Trans></option>
          <option value="es"><Trans>Spanish</Trans></option>
        </select>
      </header>
    </div>
  );
}

export default App;
