import React from 'react';
import ReactDOM from 'react-dom';
import Globe from './components/Globe';

function App() {
  return <Globe />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
