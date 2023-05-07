import React from 'react'
import './Categories.css'
import { Button, Input, Select, Space } from 'antd';
import Card from '../../Components/Card/Card';
const { Search } = Input;
const price = [
    {
        value: 'increment',
        label: 'По возрастанию',
    },
    {
        value: 'decrement',
        label: 'По убыванию',
    },
];
const name = [
    {
        value: 'atoz',
        label: 'От А до Я',
    },
    {
        value: 'ztoa',
        label: 'От Я до А',
    },
];
const date = [
    {
        value: 'old',
        label: 'Сначало Старые',
    },
    {
        value: 'new',
        label: 'Сначало Новые',
    },
];

const productlist = {
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
}

function Babies() {
    return (
        <section className='categories'>
            <div className='promo'>
                <p>Популярные бренды</p>
                <p>Доставка по Узбекистану</p>
            </div>
            <div className='container'>
                <div className='categories_sort'>
                    <div className='categories_item'>
                        <p>По цене</p>
                        <Select defaultValue="increment" options={price} />
                    </div>
                    <div className='categories_item'>
                        <p>По дате</p>
                        <Select defaultValue="new" options={date} />
                    </div>
                    <div className='categories_item'>
                        <p>По названию</p>
                        <Select defaultValue="atoz" options={name} />
                    </div>
                </div>
            </div>
            <div className='categories_productlist'>
                <ul className='categories_products'>
                    {
                        productlist.products.map((product) => {
                            return (<Card data={product} key={product.id} onclick={() => { console.log(product.id) }} />)
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Babies