import './App.scss'
import React from 'react'
import CountryStatistic from './components/CountryStatistic/CountryStatistic'
import Header from './components/Header/Header'

function App() {
  
  return (
    <div className="wrapper">
      <Header/>
      <CountryStatistic />
    </div>
  );
}

export default App;
