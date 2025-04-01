import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Counter from './pages/Counter'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/counter" element={<Counter/>}></Route>
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </>
  );
}

export default App
