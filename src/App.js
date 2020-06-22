import React, { useState } from 'react';
import logo from './logo.svg';
import { Trans } from '@lingui/macro';
import { activate, defaultLangCode } from './i18n/config.js';
import './App.css';

function App()
{
  const [selectedLangCode, setSelectedLang] = useState(defaultLangCode);

  const selectLang = (langCode) =>
  {
    console.log('selectLang() -> ' + langCode);

    activate(langCode);
    if (langCode !== selectedLangCode) {
      setSelectedLang(langCode);
    }
  }

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
        <select
          value={selectedLangCode}
          onChange={(event) => { selectLang(event.target.value) }}>
              <option value="EN">English</option>
              <option value="ES">Spanish</option>
        </select>
      </header>
    </div>
  );
}

export default App;
