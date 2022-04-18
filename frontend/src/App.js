import logo from './boys.jpg';
import './App.css';
import SideNavBar from './components/SideNavBar';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <SideNavBar defaultActiveRoute={'/'} content={
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi Mommy! We love you!
          </p>
        </header>
      </div>}
     /> 
    </React.Fragment>
  );
}

export default App;
