import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Modal from './components/Modal';

function App(): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleOnButtonClick = () => setOpen(true);
  const handleOnModalClose = () => setOpen(false);

  return (
    <div className="App">
      <Modal onClose={handleOnModalClose} open={open}>
        asdasdasd
      </Modal>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.tsx</code>
          and asdasd to reload.
        </p>
        <Button onClick={handleOnButtonClick} type="button">
          Open Modalasdasdsad
        </Button>
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
