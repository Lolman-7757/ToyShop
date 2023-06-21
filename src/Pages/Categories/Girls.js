import React from 'react'
import './Categories.css'
import { Button, Input, Select, Space } from 'antd';
import Card from '../../Components/Card/Card';
import { useEffect } from 'react';
import https from '../../Assets/https';
import { useState } from 'react';
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



function Girls() {
    const [category, setCategory] = useState({})
    const [categoryArr, setCategoryArr] = useState([])
    const changeType = (e) => {
        if (e === "increment") {
            setCategoryArr(categoryArr.sort((a, b) => a - b))
        } else {
            setCategoryArr(categoryArr.sort((a, b) => b - a))
        }
    }
    useEffect(() => {
        https.get('/categories/4')
            .then(res => {
                setCategory(res.data)
                setCategoryArr(res.data.products.sort((a, b) => a - b))
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <section className='categories'>
            <div className='promo'>
                <p>Популярные бренды</p>
                <p>Доставка по Узбекистану</p>
            </div>
            <div className='container'>
                <div className='categories_sort'>
                    <h1>{category.name}</h1>
                </div>
            </div>
            <div className='categories_productlist'>
                <ul className='categories_products'>
                    {
                        categoryArr?.map(product => {
                            return <Card data={product} key={product.id} />
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Girls