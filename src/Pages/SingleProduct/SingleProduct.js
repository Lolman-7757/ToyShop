import React, { useState, useEffect } from 'react'
import https from '../../Assets/https'
import { Link, useParams } from 'react-router-dom'
import { CiDeliveryTruck } from 'react-icons/ci'
import Swal from 'sweetalert2'
import './SingleProduct.css'

function SingleProduct() {
    const [data, setData] = useState({})
    let { id } = useParams()
    // GET DATA
    function Warn(num) {
        Swal.fire({
            title: `Error ${num}`,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
    useEffect(() => {
        https
            .get(`/products/${id}`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => Warn(err))
    }, [])


    return (
        <section className='single'>
            <div className='container'>
                <div className='single_img'>
                    <img alt='product_IMG' src={data.paths} />
                </div>
                <div className='single_info'>
                    <h1 className='single_title'>{data.name}</h1>
                    <Link to={data?.category?.url} className='single_link'>{data?.category?.name}</Link>
                    <h2 className='single_descr'>{data.description}</h2>
                    <div className='single_content'>
                        <p>Материал</p>
                        <p>Материал</p>
                    </div>
                    <div className='single_content'>
                        <p>Возрастное ограничение</p>
                        <p>Материал</p>
                    </div>
                    <div className='single_content'>
                        <p>Цвет</p>
                        <p>Материал</p>
                    </div>
                    {
                        data.free_delivery ? <div className='single_sub'>
                            <CiDeliveryTruck />
                            <p>Бесплатная доставка</p>
                        </div>: <></>
                    }
                    <p className='single_price'>{data.price} сум</p>
                    <p className='single_disc'>Скидка : {data.discount}%</p>
                    <p className='single_last'>{data.price - (data.price * data.discount) / 100} сум</p>
                    <button>В Корзину</button>
                </div>
            </div>
        </section>
    )
}

export default SingleProduct