import React from 'react';
import './App.css';
import Content from '../components/content'
import Menu from '../components/menu'
import { BrowserRouter as Router } from  'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Content />
      </Router>
    </div>
  );
}

export default App;
