import React, { useState } from 'react';
import './App.css';
import Content from '../components/content'
import Menu from '../components/menu'

import { BrowserRouter as Router } from 'react-router-dom'

import DataContext, { data } from '../Data/DataContext'

function App() {
  const [state, setState] = useState(data)

  return (
    <DataContext.Provider value={{state, setState}}>
      <div className="App">
        <Router>
          <Menu/>
          <Content />
        </Router>
        </div>
    </DataContext.Provider>
  );
}

export default App;
