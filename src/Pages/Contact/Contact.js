import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <section className='contact'>
            <div className='container'>
                <div className='contact_form'>
                    <h1>Обратная связь</h1>
                    <form>
                        <input placeholder='Ваше имя'/>
                        <input placeholder='E-mail'/>
                        <textarea placeholder='Сообщение'/>
                        <button type='submit'>Отправить</button>
                    </form>
                    <p>Или же</p>
                    <a href="mailto:asadmorder@gmail.com">Напишите нам сразу</a>
                    {/* <a href="mailto:moderator@toster.ru">Mailto</a> */}
                </div>
                <div className='contact_img'>
                    <img src='https://toyshelf.store/static/store/images/woodie.png' alt='woodie'/>
                </div>
            </div>
        </section>
    )
}

export default Contact