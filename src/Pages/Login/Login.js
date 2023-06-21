import React, { useState } from 'react'
import './Login.css'
// API
import https from '../../Assets/https'
import axios from 'axios'
// Components
import Swal from 'sweetalert2';
// UseForm
import { useForm } from "react-hook-form";
import { Input } from 'antd';

function Login() {
    // UseForm
    const { register,
        handleSubmit,
        watch,
        formState: { errors, isValid }
    } = useForm();

    // Alerts
    function Success() {
        Swal.fire({
            title: `Success login`,
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
            .then(res => {
                console.log(res.data)
                https.post('/login', {...data})
                    .then(res => {
                        Success()
                        window.localStorage.setItem('token', res.data.token)
                        window.localStorage.setItem('admin', res.data.user.roles[0].name)
                        window.localStorage.setItem('someID', res.data.user.id)
                        window.location.reload();
                    })
                    .catch(err => {
                        Warn(err.response.status)
                    })
            })
            .catch(err => console.log(err))
    }

    return (
        <form className='login_block' onSubmit={handleSubmit(onSubmit)}>
            <h1>Войти в аккаунт</h1>
            <input placeholder='Email пользователя'  {...register("email", { required: true })}/>
            <input placeholder='Пароль' type='password'  {...register("password", { required: true })}/>
            <button type='submit'>Войти</button>
        </form>
    )
}

export default Login