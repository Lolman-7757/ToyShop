import React, { useState, useEffect } from 'react'
// Стили (css)
import './Home.css'
// Иконки
import { FaPlaneDeparture } from 'react-icons/fa'
import { BsCalendar2Date } from 'react-icons/bs'
import { BiMedal } from 'react-icons/bi'
import Card from '../../Components/Card/Card'
import https from '../../Assets/https'

function Home() {
    const [products, setProducts] = useState([])
    const [ admin, setAdmin ] = useState([])
    useEffect(() => {
        https.get('/categories')
        .then(res => setProducts(res.data.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <section className='header_navs-block'>
                <div className='container'>
                    <ul className='header_navs'>
                        <li><a href='/'>Мальчикам</a></li>
                        <li><a href='/'>Девочкам</a></li>
                        <li><a href='/'>Взрослым</a></li>
                        <li><a href='/'>Малышам</a></li>
                    </ul>
                </div>
            </section>
            <section className='home'>
                <div className='home_wrapper'>
                    <div className='container'>
                        <h1>Онлайн Магазин ToyJoy</h1>
                        <h2>Детские игрушки и товары для детей</h2>
                        <h3>от ведущих мировых производителей с доставкой по Узбекистану!</h3>
                        <ul className='home_advantages'>
                            <li>
                                <FaPlaneDeparture />
                                Бесплатная доставка
                            </li>
                            <li>
                                <BsCalendar2Date />
                                Работаем без выходных
                            </li>
                            <li>
                                <BiMedal />
                                Гарантия качества
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {
                products.map((productlist, listID) => {
                    return (
                        <section className='productlist' key={listID}>
                            <div className='container'>
                                <a href={productlist.url} className='productlist_title'>{productlist.name}</a>
                                <ul className='products'>
                                    {
                                        productlist.products.map((product) => {
                                            return (<Card data={product} key={product.id}/>)
                                        })
                                    }
                                </ul>
                            </div>
                        </section>
                    )
                })
            }
            <section className='subscribe'>
                <div className='subscribe_wrapper'>
                    <div className='container'>
                        <h2 className='subscribe_title'>Специальные предложения!</h2>
                        <h3 className='subscribe_descr'>Присоединяйтесь к нам, узнавайте первыми о скидках и новых поступлениях магазина</h3>
                        <form>
                            <input placeholder='Ваш e-mail адресс' />
                            <button type='submit'>Подписаться</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home