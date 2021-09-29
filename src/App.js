import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Loading from './components/Loading';

function App() {
  return (
    <div className="App">
      <Loading/>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
