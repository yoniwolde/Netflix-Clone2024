import React from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Banner/Banner'
import RowList from './Components/Rows/RowList/RowList'

function App() {
  return (
    <div>
      <Home />
      <Banner/>
      <RowList/>
      <Footer/>
    </div>
  )
}

export default App