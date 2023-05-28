import React, { useState, useEffect } from 'react'
import './Admin.css'
import https from '../../Assets/https'
import Authorization from '../Login/Authorization'
import { Switch } from 'antd'

function Orders() {
    const token = window.localStorage.getItem("token")
    const [isDone, setIsDone] = useState(Boolean)
    const [data, setData] = useState([])
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        if (window.localStorage?.getItem("someID") != null) {
            https.get(`/users/${window.localStorage?.getItem("someID")}`)
                .then(res => {
                    if (res?.data?.data?.roles[0]?.name == "admin") { setIsAdmin(true); console.log(isAdmin) }
                    else { setIsAdmin(false); console.log(isAdmin) }
                })
                .catch(err => alert(err))
            https.get(`/orders`)
                .then(res => setData(res.data.data))
                .catch(err => console.log(err))
        }


    }, [])
    function checkHandle(e, num, amount) {
        https.patch(`/orders/${num}`, {
            status: e,
            product_id: num,
            amount: amount
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    if (isAdmin) {
        return (
            <section className='orders'>
                <div className='container'>
                    <h1 className='orders_title'>Заказы</h1>
                    <h2 className='orders_subtitle'>Здесь вы можете посмотреть ваши заказы</h2>
                    <ul className='orders_wrapper'>
                        {
                            data.map((item, itemID) => (
                                <li className='orders_item' key={itemID}>
                                    <div className='orders_item-img'>
                                        <Switch
                                        size='large'
                                            defaultChecked={item.status}
                                            onChange={(e) => checkHandle(e, item.product.id, item.amount)}
                                            checkedChildren="Доставлено"
                                            unCheckedChildren="Не доставлено"
                                        />
                                        <img alt='IMG' src={item.product.img} />
                                    </div>
                                    <div className='orders_product'>
                                        <h3>{item.product.name}</h3>
                                        <p>Цена за шт: {item.product.price} сум</p>
                                        <p>Количество: {item.amount} шт</p>
                                        <p>Общая сумма: {item.product.price * item.amount} сум</p>
                                    </div>
                                    <div className='orders_user'>
                                        <h3>Информация о Заказчике</h3>
                                        <p>Имя: {item.user.name}</p>
                                        <p>Номер телефона: {item.user.phone}</p>
                                        <p>Адресс почты: {item.user.email}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        )
    } else {
        return <Authorization />
    }
}

export default Orders