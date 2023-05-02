import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'

function Main() {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route index element={<Home/>}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default Main