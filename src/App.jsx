import React from 'react';

import './styles.css';

import Main from './components/Header';
import Works from './components/Works';
import About from './components/About';
import Links from './components/Links';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Main />
    <Works />
    <About />
    <Links />
    <Contacts />
    <Footer />
  </div>
);
export default App;
