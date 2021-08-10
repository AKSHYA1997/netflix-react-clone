import './App.css';
import React from 'react';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGIALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
