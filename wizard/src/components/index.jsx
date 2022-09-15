import React from 'react';
import './App.css';
import WizardManager from './WizardManager';

const App = () => {
  const desc = "literally a wizard to help you build a better prompt for your ai art creations"

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Wizard of Prompt
        </h1>
        <h6>
          {desc}
        </h6>
      </header>

      <div>
        <WizardManager />
      </div>
    </div>
  );
}

export default App;
