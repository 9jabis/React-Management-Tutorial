import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='gray-background'>
        <img src={logo} let='logo' />
        <h2>management sysdtem</h2>
      </div>
    );
  }
}

export default App;
