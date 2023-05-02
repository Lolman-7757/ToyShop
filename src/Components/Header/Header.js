import React, { useState } from 'react'
// Стили (css)
import './Header.css'

// Иконки
import { BiSearch } from 'react-icons/bi'
import { SlPresent } from 'react-icons/sl'
import { BsCart, BsPerson, BsFilterRight } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'

function Header() {
  const [modal, setModal] = useState(false)
  return (
    <>
      <header>
        <div className='container'>
          <a href='/' className='header_logo'>
            <SlPresent />
          </a>
          <ul className='header_nav'>
            <li><a href='/'>Мальчикам</a></li>
            <li><a href='/'>Девочкам</a></li>
            <li><a href='/'>Взрослым</a></li>
            <li><a href='/'>Малышам</a></li>
          </ul>
          <div className='header_btns'>
            <form className='header_search'>
              <input placeholder='Поиск' />
              <BiSearch />
            </form>
            <div className='header_btn-block'>
              <a href='/' className='header_cart'>
                <BsCart />
                <span>1</span>
              </a>
              <a href='/'><BsPerson /></a>
            </div>
          </div>
          <div className='header_bar-btn' onClick={() => { setModal(!modal) }}>
            {modal ? <RxCross1 /> : <BsFilterRight />}
          </div>
        </div>
        <div className={`modal ${modal ? 'modal_opened' : 'modal_closed'}`}>
          <div className={`container ${modal? 'container_opened' : 'container_closed'}`}>
            <div className='header_btn-block'>
              <a href='/' className='header_cart'>
                <BsCart />
                <span>1</span>
              </a>
              <a href='/'><BsPerson /></a>
            </div>
            <form className='header_search'>
              <input placeholder='Поиск' />
              <BiSearch />
            </form>
            <ul className='modal_navs'>
              <li><a href='/'>Контакты</a></li>
              <li><a href='/'>Регистрация</a></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header