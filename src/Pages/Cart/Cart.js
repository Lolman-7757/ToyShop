import React, { useState, useEffect } from 'react'
import Authorization from '../Login/Authorization'
import https from '../../Assets/https'
import { Link } from 'react-router-dom'
import './Cart.css'
import { BsArrowLeft } from 'react-icons/bs'

function Cart() {
    const [cartAmount, setCartAmount] = useState([])
    const [number, setNumber] = useState(0)
    const [priceData, setPriceData] = useState([])
    const [price, setPrice] = useState(0)
    const [cartModal, setCartModal] = useState(false)
    const [data, setData] = useState({})
    const [newData, setNewData] = useState([])
    const [ sendingData, setSendingData ] = useState([])
    useEffect(() => {
        https.get(`/carts/${window.localStorage.getItem("someID")}`)
            .then(res => {
                setData(res.data.data)
                res?.data?.data.products?.map(item => {
                    setCartAmount(cartAmount.push(Number(item.quantity)))
                })
                setNumber(cartAmount.reduce((a, b) => a + b) / 2)
                res?.data?.data.products?.map(item => {
                    setPriceData(priceData.push(Number(item.price - (item.price * item.discount) / 100)))
                })
                setPrice(priceData.reduce((a, b) => a + b) / 2)
                res.data.data.products.map(item => {
                    setNewData(newData.push({
                        product_id: item.id,
                        amount: item.amount,
                        status: false
                    }))
                })
            })
            .catch(err => console.log(err))
    }, [])

    const sendOrder = () => {
        data.products.map(item =>{
            setSendingData(sendingData.push({product_id:item.id,amount: item.quantity,status:false}))
        })
        https.post('/orders', {orders: sendingData})
        .then(res => {
            alert('Ваш заказ был успешно отправлен оператору. Ожидайте звонка!')
            https.post('/carts/clear')
            .then(res => console.log(res))
            .catch(err => console.log(err))
        })
        .catch(err => alert('Упс...что-то пошло не так'))
    }

    if (window.localStorage.getItem("token")) {
        return (
            <section className='cart'>
                <div className='container'>
                    <div className='cart_info'>
                        <Link className='cart_back' to='/'>
                            <BsArrowLeft />
                            Продолжить покупки
                        </Link>
                        <div className='cart_amounts'>
                            <p>Товары: <b>{number}</b></p>
                            <p>Общая Цена: <b>{price.toLocaleString()}</b></p>
                        </div>
                        <button onClick={() => setCartModal(true)}>Оформить заказ</button>
                    </div>
                    <div className='cart_products-wrapper'>
                        <ul className='cart_products-titles'>
                            <li>Фото</li>
                            <li>Товар</li>
                            <li>Цена</li>
                            <li>Количество</li>
                            <li>Итого</li>
                        </ul>
                        {
                            data.products?.map((product, productID) => {
                                return (
                                    <ul key={productID} className='cart_products-items'>
                                        <li className='cart_product-items_img'><img src={product.paths} alt='cart_img'/></li>
                                        <li>{product.name}</li>
                                        <li>{(product.price - (product.price * product.discount)).toLocaleString()}</li>
                                        <li>{product.quantity}</li>
                                        <li>{(product.quantity * (product.price - (product.price * product.discount))).toLocaleString()}</li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={`cart_modal ${cartModal ? "cart_modal-active" : "cart_modal-none"}`}>
                    <div className='cart_payment'>
                        <h1> Ваши данные для оплаты </h1>
                        <form>
                            <label>
                                <p>Имя</p>
                                <input placeholder='Введите ваше имя' />
                            </label>
                            <label>
                                <p>Телефон</p>
                                <input placeholder='Введите ваш номер телефона' />
                            </label>
                            <label>
                                <p>E-mail</p>
                                <input placeholder='Введите ваш электронный адресс' />
                            </label>
                        </form>
                        <form>
                            <label>
                                <p>Адресс</p>
                                <input placeholder='Введите ваше адресс' />
                            </label>
                            <label>
                                <p>Город</p>
                                <input placeholder='Введите ваш город' />
                            </label>
                            <label>
                                <p>Регион</p>
                                <input placeholder='Введите ваш регион' />
                            </label>
                            <label>
                                <p>Индекс</p>
                                <input placeholder='Введите ваш почтовый индекс' />
                            </label>
                        </form>
                        <form>
                            <label>
                                <p>Номер Карты</p>
                                <input placeholder='0000 0000 0000' />
                            </label>
                            <label>
                                <p>Дата истечения</p>
                                <input placeholder='01/23' />
                            </label>
                            <label>
                                <p>CVV</p>
                                <input placeholder='286' />
                            </label>
                        </form>
                        <div className='cart_btn-block'>
                            <button onClick={() => setCartModal(false)}>Назад</button>
                            <button onClick={() => sendOrder()}>Оформить</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else (<Authorization />)
}
export default Cart