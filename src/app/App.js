import React from 'react';
import '../App.css';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

function App() {
  return (
    <>
  <div className='app'>
    <div className='nav'>
      <Nav/>
     </div>
    <div className='main'>
     <p>CardList</p>
     <CardList/>
    </div>
    <footer className='footer'>
      <Footer/>
    </footer>
  </div>
    </>
  )
}

export default App;
