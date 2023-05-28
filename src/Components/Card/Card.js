import React, { useState, useEffect } from 'react'
// Стиль(css)
import './Card.css'
import { BsFillTrashFill } from 'react-icons/bs'
import https from '../../Assets/https'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


function Card({ data, isAdmin }) {
     // Alerts
     function Success() {
        Swal.fire({
            title: `Товар был успешно добавлен!Обновите страницу и посетите свою корзинку`,
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }
    function Warn(num) {
        Swal.fire({
            title: `Ошибка: ${num}`,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }


    const addCart = () =>{
        https.post('/carts/increment', { product_id : data.id })
        .then(res => Success())
        .catch( err => Warn(err) )
    }
    const deleteItem = () => {
        if(isAdmin){
            https.delete(`/products/${data.id}`)
            .then(res => {alert('Продукт удалён! Обновите страницу.')})
            .catch(err => {alert('Упс! Что-то пошло не так...')})
        }else{
            alert('Что-то пошло не так! Обновите страницу')
        }
    } 
    return (
        <li className='card'>
            <div className='card_img'>
                <img src={data.paths} alt='toy_img' />
            </div>
            <div className='card_info'>
                <Link to={`/products/${data.id}`} className='card_title'>{data.name}</Link>
                <h3 className='card_descr'>{data.description}</h3>
                <h3 className='card_price'>{data.price}</h3>
                <button onClick={() => addCart()}>В Корзину</button>
                {isAdmin ? <button onClick={() => deleteItem()}><BsFillTrashFill /></button> : <></>}
            </div>
        </li>
    )
}

export default Card