import React from 'react'
// Стиль(css)
import './Card.css'

function Card({ data }) {
    return (
        <li className='card'>
            <div className='card_img'>
                <img src={data.img} alt='toy_img' />
            </div>
            <div className='card_info'>
                <h2 className='card_title'>{data.title}</h2>
                <h3 className='card_descr'>{data.description}</h3>
                <h3 className='card_price'>{data.price}</h3>
                <button>В Корзину</button>
            </div>
        </li>
    )
}

export default Card