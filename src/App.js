import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ListBooks from './components/ListBooks';


function App() {
  return (
    <main className='w-10/12 mx-auto bg-slate-100 min-h-screen'>
      <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/books' element={<ListBooks/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </main>
    
  );
}

export default App;
