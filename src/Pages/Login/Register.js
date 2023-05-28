import React, { useState } from 'react'
import './Login.css'
// API
import https from '../../Assets/https'
import axios from 'axios'
// Components
import Swal from 'sweetalert2';
// UseForm
import { useForm } from "react-hook-form";

function Register() {
    // UseForm

    const { register,
        handleSubmit,
        watch,
        formState: { errors, isValid }
    } = useForm();

    // Alerts
    function Success() {
        Swal.fire({
            title: `Successfull  registration`,
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }
    function Warn(num) {
        Swal.fire({
            title: `Error ${num}`,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
    async function onSubmit(data) {
        axios.get('https://financial-project.uz/api/sanctum/csrf-cookie', { withCredentials: false })
        .then( res => {
            https.post('/register', {...data , role:"user"})
            .then( res => {
                Success()
                window.localStorage.setItem("token", res.data.token)
                window.localStorage.setItem("someID", res.data.user.id)
            })
            .catch( err => {
                Warn(err)
            })
        })
        .catch(err => console.log(err))
    }

    return (
        <form className='login_block' onSubmit={handleSubmit(onSubmit)}>
            <h1>Создать аккаунт</h1>
            <input placeholder='Имя пользователя' {...register("name", { required: true })}/>
            <input placeholder='E-mail' {...register("email", { required: true })}/>
            <input placeholder='Номер телефона' {...register("phone", { required: true })}/>
            <input placeholder='Пароль' {...register("password", { required: true })}/>
            <button type='submit'>Создать аккаунт</button>
        </form>
    )
}

export default Register