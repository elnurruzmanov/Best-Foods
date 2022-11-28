import React from 'react'
import HeadLineCards from './components/HeadLineCards'
import Hero from './components/Hero'
import Food from './components/Food'


import Navbar from './components/Navbar'
import Category from './components/Category'

const App = () => {
  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Category />
    </div>
    </>
  )
}

export default App