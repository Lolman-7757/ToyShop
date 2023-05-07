import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Contact from './Pages/Contact/Contact'
import Boys from './Pages/Categories/Boys'
import Girls from './Pages/Categories/Girls'
import Babies from './Pages/Categories/Babies'
import Adults from './Pages/Categories/Adults'

function Main() {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/boys' element={<Boys/>}/>
                    <Route path='/girls' element={<Girls/>}/>
                    <Route path='/babies' element={<Babies/>}/>
                    <Route path='/adults' element={<Adults/>}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default Main