import React, { useState } from 'react'
// Стили (css)
import './Header.css'

// Иконки
import { BiSearch } from 'react-icons/bi'
import { SlPresent } from 'react-icons/sl'
import { BsCart, BsPerson, BsFilterRight } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

function Header() {
  const [modal, setModal] = useState(false)
  const [ isAuthorized, setIsAuthorized ] = useState(false)
  return (
    <>
      <header>
        <div className='container'>
          <Link to='/' className='header_logo'>
            <SlPresent />
          </Link>
          <ul className='header_nav'>
            <li><Link to='/boys'>Мальчикам</Link></li>
            <li><Link to='/girls'>Девочкам</Link></li>
            <li><Link to='/adults'>Взрослым</Link></li>
            <li><Link to='/babies'>Малышам</Link></li>
          </ul>
          <div className='header_btns'>
            <form className='header_search'>
              <input placeholder='Поиск' />
              <BiSearch />
            </form>
            <div className='header_btn-block'>
              <Link to={isAuthorized? '/cart' : '/login'} className='header_cart'>
                <BsCart />
                <span>1</span>
              </Link>
              <Link to={isAuthorized? '/profile' : '/login'}><BsPerson /></Link>
            </div>
          </div>
          <div className='header_bar-btn' onClick={() => { setModal(!modal) }}>
            {modal ? <RxCross1 /> : <BsFilterRight />}
          </div>
        </div>
        <div className={`modal ${modal ? 'modal_opened' : 'modal_closed'}`}>
          <div className={`container ${modal ? 'container_opened' : 'container_closed'}`}>
            <div className='header_btn-block'>
              <Link to={isAuthorized? '/cart' : '/login'} onClick={() => { setModal(!modal) }} className='header_cart'>
                <BsCart />
                <span>1</span>
              </Link>
              <Link to={isAuthorized? '/profile' : '/login'} onClick={() => { setModal(!modal) }}><BsPerson /></Link>
            </div>
            <form className='header_search'>
              <input placeholder='Поиск' />
              <BiSearch />
            </form>
            <ul className='modal_navs'>
              <li><Link onClick={() => { setModal(!modal) }} to='/contact'>Контакты</Link></li>
              <li><Link onClick={() => { setModal(!modal) }} to='/login'>Регистрация</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header