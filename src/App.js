import React from 'react'
import './App.css'

import Bot from '../src/components/Bot';
import Header from '../src/components/Header';
import Aditional from '../src/components/Aditional';

import Footer from '../src/components/Footer';
import Body from '../src/components/Body';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Body />
      {/* <Bot /> */}

<div className='my-40'>
<Aditional />
</div>
      <Footer />
    </div>

  )
}

export default App