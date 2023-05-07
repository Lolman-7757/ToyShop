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
                data.map((productlist, listID) => {
                    return (
                        <section className='productlist' key={listID}>
                            <div className='container'>
                                <a href={productlist.url} className='productlist_title'>{productlist.name}</a>
                                <ul className='products'>
                                    {
                                        productlist.products.map((product) => {
                                            return (<Card data={product} key={product.id} onclick={() => { console.log(product.id) }} />)
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