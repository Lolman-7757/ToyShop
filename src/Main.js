import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Boys from './Pages/Categories/Boys'
import Girls from './Pages/Categories/Girls'
import Babies from './Pages/Categories/Babies'
import Adults from './Pages/Categories/Adults'
import Authorization from './Pages/Login/Authorization'
import Profile from './Pages/Profile/Profile'
import AddProduct from './Pages/Admin/AddProduct'
import Orders from './Pages/Admin/Orders'
import SingleProducts from './Pages/SingleProduct/SingleProduct'
import Cart from './Pages/Cart/Cart'

function Main() {
    useEffect(() => {
    }, [window.localStorage.getItem("token")])
    
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/login' element={<Authorization />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/boys' element={<Boys />} />
                    <Route path='/girls' element={<Girls />} />
                    <Route path='/babies' element={<Babies />} />
                    <Route path='/adults' element={<Adults />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/addproduct' element={<AddProduct />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/products/:id' element={<SingleProducts />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default Main