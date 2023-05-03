import React from 'react';
// import logo from './logo.svg';
import icon from './icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="card">
    <h3 className="city">ACCRA</h3>
    <h4>PARTLY CLOUD</h4>
    <div className="value">
        <img src={require('./icon.png')} alt="" />
        <h2>30°</h2>
    </div>
    <div className="footer_box">
        <div className="left">
            <p>max</p>
            <p>33°</p>
        </div>
        <div className="line" />
        <div className="Right">
            <p>min</p>
            <p>29°</p>
        </div>
    </div>
</div>
    </div>
  );
}

export default App;
