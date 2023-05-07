import React from 'react'
import './Login.css'

function Login() {
    return (
        <section className='login'>
            <div className='container'>
                <form className='login_block'>
                    <h1>Войти в аккаунт</h1>
                    <input placeholder='Имя пользователя' />
                    <input placeholder='Пароль' />
                    <button type='submit'>Войти</button>
                </form>
                <form className='login_block'>
                    <h1>Создать аккаунт</h1>
                    <input placeholder='Имя пользователя' />
                    <input placeholder='E-mail' />
                    <input placeholder='Пароль' />
                    <input placeholder='Подтверждение пароля' />
                    <button type='submit'>Создать аккаунт</button>
                </form>
            </div>
        </section>
    )
}

export default Login