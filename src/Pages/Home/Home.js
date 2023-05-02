import React from 'react'
// Стили (css)
import './Home.css'
// Иконки
import { FaPlaneDeparture } from 'react-icons/fa'
import { BsCalendar2Date } from 'react-icons/bs'
import { BiMedal } from 'react-icons/bi'
import Card from '../../Components/Card/Card'

function Home() {
    const data = [
        {
            name: 'Мальчикам',
            url: '/boys',
            products: [
                {
                    id: 1,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
                {
                    id: 2,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
                {
                    id: 3,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
                {
                    id: 4,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
            ]
        },
        {
            name: 'Девочкам',
            url: '/girls',
            products: [
                {
                    id: 1,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
                {
                    id: 2,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
                {
                    id: 3,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
                {
                    id: 4,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
            ]
        },
        {
            name: 'Малышам',
            url: '/babies',
            products: [
                {
                    id: 1,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
                {
                    id: 2,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
                {
                    id: 3,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
                {
                    id: 4,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
            ]
        },
        {
            name: 'Взрослым',
            url: '/adults',
            products: [
                {
                    id: 1,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
                {
                    id: 2,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
                {
                    id: 3,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
                {
                    id: 4,
                    title: 'Игровой набор',
                    img: 'https://toyshelf.store/media/pictures/igrovoj-nabor-lol-surprise-fashion-show-mega-podium-80-syurprizov-box.jpg',
                    description: 'В КОМПЛЕКТ ВХОДЯТ 12 ЭКСКЛЮЗИВНЫХ КУКОЛ: 2 Куклы OMG Fashion с трансформир…',
                    price: 1980000
                },
            ]
        }
    ]
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
                data.map((productlist) => {
                    return (
                        <section className='productlist'>
                            <div className='container'>
                                <a href={productlist.url} className='productlist_title'>{productlist.name}</a>
                                <ul className='products'>
                                    {
                                        productlist.products.map((product) => {
                                            return (<Card data={product} />)
                                        })
                                    }
                                </ul>
                            </div>
                        </section>
                    )
                })
            }
        </>
    )
}

export default Home