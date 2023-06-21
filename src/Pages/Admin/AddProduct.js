import React, { useEffect, useState } from 'react'
import './Admin.css'
import Authorization from '../Login/Authorization'
import { Select, Input, Checkbox, Button, Space, Upload } from 'antd';
import { CiCirclePlus } from 'react-icons/ci'
import { UploadOutlined, UserOutlined, ItalicOutlined, GoldOutlined, BgColorsOutlined, SmileOutlined, DollarOutlined, PercentageOutlined, LinkOutlined } from '@ant-design/icons';
import https from '../../Assets/https';
import axios from 'axios'
// Components
import Swal from 'sweetalert2';
// UseForm
import { useForm } from "react-hook-form";

function AddProduct() {
    const [isAdmin, setIsAdmin] = useState(false)
    const [delivery, setDelivery] = useState(false)
    const [category, setCategory] = useState(4)
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [material, setMaterial] = useState()
    const [color, setColor] = useState()
    const [age, setAge] = useState()
    const [price, setPrice] = useState()
    const [discount, setDiscount] = useState()
    const [link, setLink] = useState()
    const [selectedFile, setSelectedFile] = useState()
    const categoriesList = [
        {
            value: 2,
            label: 'Малышам',
        },
        {
            value: 1,
            label: 'Взрослым',
        },
        {
            value: 4,
            label: 'Девочкам',
        },
        {
            value: 3,
            label: 'Мальчикам',
        },
    ];
    const onChange = (e) => {
        setDelivery(e.target.checked)
    };
    // UseForm
    const { register,
        handleSubmit,
        watch,
        formState: { errors, isValid }
    } = useForm();

    // Alerts
    function Success() {
        Swal.fire({
            title: `Товар был успешно добавлен!`,
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
    useEffect(() => {
        if (window.localStorage?.getItem("someID") != null) {
            https.get(`/users/${window.localStorage.getItem("someID")}`)
                .then(res => {
                    if (res.data.data.roles[0].name == "admin") { setIsAdmin(true) }
                    else {
                        setIsAdmin(false); console.log(isAdmin)
                    }
                })
        }
    }, [])


    if (isAdmin) {

        async function onSubmit(data) {
            const formData = new FormData();
            formData.append('path', selectedFile)
            https.post('/products', {
                ...data,
                category_id: category,
                free_delivery: delivery,
                name: name,
                description: description,
                material: material,
                color: color,
                age: age,
                price: price,
                discount: discount,
                paths: link,
            }).then(res => Success())
                .catch(err => Warn(err.response.status))
        }
        return (
            <section className='add'>
                <div className='container'>
                    <h1 className='add_title'>Добавить товар</h1>
                    <h2 className='add_subtitle'>Заполните форму ниже для добавления продукта!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            <p>Категория</p>
                            <Select size='large'  options={categoriesList} onChange={(e) => setCategory(e)} />
                        </label>
                        <label>
                            <p>Название</p>
                            <Input size="large" placeholder="Введите название товара" prefix={<UserOutlined />} onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label>
                            <p>Описание</p>
                            <Input size="large" placeholder="Введите описание товара" prefix={<ItalicOutlined />} onChange={(e) => setDescription(e.target.value)} />
                        </label>
                        <label>
                            <p>Материал</p>
                            <Input size="large" placeholder="Введите материал товара" prefix={<GoldOutlined />} onChange={(e) => setMaterial(e.target.value)} />
                        </label>
                        <label>
                            <p>Цвет</p>
                            <Input size="large" placeholder="Введите цвет товара" prefix={<BgColorsOutlined />} onChange={(e) => setColor(e.target.value)} />
                        </label>
                        <label>
                            <p>Возрастное Ограничение</p>
                            <Input size="large" placeholder="Введите возастное ограничение товара" prefix={<SmileOutlined />} onChange={(e) => setAge(e.target.value)} />
                        </label>
                        <Checkbox onChange={onChange}>Бесплатная доставка</Checkbox>
                        <label>
                            <p>Цена</p>
                            <Input size="large" placeholder="Введите цену товара" suffix="сум" prefix={<DollarOutlined />} onChange={(e) => setPrice(e.target.value)} />
                        </label>
                        <label>
                            <p>Скидка</p>
                            <Input size="large" placeholder="Введите скидку на товар если она есть" prefix={<PercentageOutlined />} onChange={(e) => setDiscount(e.target.value)} />
                        </label>
                        <label>
                            <p>Загрузить изображение</p>
                            <Input size="large" placeholder="Введите ссылку на изображение товара" prefix={<LinkOutlined />} onChange={(e) => setLink(e.target.value)} />
                        </label>
                        <button type='submit'><CiCirclePlus/></button>
                    </form>
                </div>
            </section>
        )
    } else {
        return <Authorization />
    }

}

export default AddProduct