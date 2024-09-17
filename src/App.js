import React from 'react'
import './App.css'

import Bot from '../src/components/Bot';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Body from '../src/components/Body';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Body />
      <Bot />
      <Footer />
    </div>

  )
}

export default App