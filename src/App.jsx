import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppProvider from "./utils/context"


import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Header from "./components/Header/Header"
import NewsLetter from "./components/Footer/NewsLetter/NewsLetter"
import Footer from './components/Footer/Footer'


function App() {

  return (
    <BrowserRouter>
    <AppProvider>


    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category/:id' element={<Category/>}/>
      <Route path='/product/:id' element={<SingleProduct/>}/>
    </Routes>
    <NewsLetter/>
    <Footer/>
    </AppProvider>
    </BrowserRouter>
  )
}

export default App
