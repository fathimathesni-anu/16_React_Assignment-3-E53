import React from 'react'
import About from './Components/About'
import Header from './Components/Header'
import Movielist from './Components/Movielist'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router> 
        <div className='App'>
          <Header />
          <Routes>
            <Route path='/' element={<Movielist />} />
            <Route path='/About' element={<About />} />
          </Routes>
        </div>
      </Router>  
    </div>
  );
}


export default App