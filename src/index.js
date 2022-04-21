import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchEngine from './SearchEngine';
import CentralImage from './CentralImage';
import CurrentWeather from './CurrentWeather';
import Footer from './Footer';
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-container">
          <div className="weather-wrap">
            <h1>Brussels</h1>
            <h2>Wed. 03/03/2022</h2>
            <SearchEngine />
            <CentralImage />
            <CurrentWeather />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


