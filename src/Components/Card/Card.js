import React, { useState, useEffect } from 'react'
// Стиль(css)
import './Card.css'
import { BsFillTrashFill } from 'react-icons/bs'
import https from '../../Assets/https'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


function Card({ data }) {
    const [admin, setAdmin] = useState(window.localStorage.getItem('admin'))
    const [info, setInfo] = useState(data.description)
    const [dotes, setDotes] = useState(["..."])

    // Alerts
    function Success(text) {
        Swal.fire({
            title: text,
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }
    function Warn(text) {
        Swal.fire({
            title: text,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    const addCart = () => {
        https.post('/carts/increment', { product_id: data.id })
            .then(res => {
                Success(`Товар был успешно добавлен!Посетите свою корзинку`)
                window.location.reload();
            })
            .catch(err => Warn(`Ошибка: Произведите вход в аккаунт`))
    }
    const deleteItem = () => {
        console.log(admin)
        if (admin === "admin") {
            https.delete(`/products/${data.id}`)
                .then(res => { Success(`Продукт удалён! Обновите страницу.`) })
                .catch(err => { Warn(`Упс! Что-то пошло не так...`) })
        } else {
            alert('Что-то пошло не так! Обновите страницу')
        }
    }
    function descriptionHandle ( date) {
        if(date.split('').length > 100){
            return date.split('').slice(0,99).concat(dotes).join("")
        }else{
            return date
        }
    }
    return (
        <li className='card'>
            <div className='card_img'>
                <img src={data.paths} alt='toy_img' />
            </div>
            <div className='card_info'>
                <Link to={`/products/${data.id}`} className='card_title'>{data.name}</Link>
                <h3 className='card_descr'>{descriptionHandle(info)}</h3>
                <h3 className='card_price'>{data.price}</h3>
                <div className='card_btn-group'>
                    <button onClick={() => addCart()}>В Корзину</button>
                    {admin === "admin" ? <button onClick={() => deleteItem()}><BsFillTrashFill /></button> : <></>}
                </div>
            </div>
        </li>
    )
}

export default Card