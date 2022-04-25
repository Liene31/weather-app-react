import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './Weather';
import Footer from './Footer';
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-container">
          <div className="weather-wrap">    
          <Weather city={"Brussels"}/>                    
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


