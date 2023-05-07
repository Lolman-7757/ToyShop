import React from 'react'
// Стили (css)
import './Footer.css'
// Иконки
import { FaCcVisa, FaGooglePay, FaCcPaypal, FaApplePay, FaCcMastercard, FaTelegram, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer-wrapper'>
          <div className='footer_upper'>
            <ul className='footer_navs'>
              <li className='footer_navs-header'><Link to='/'>ToyJoy</Link></li>
              <li><Link to='/boys'>Мальчикам</Link></li>
              <li><Link to='/girls'>Девочкам</Link></li>
              <li><Link to='/babies'>Малышам</Link></li>
              <li><Link to='/adults'>Взрослым</Link></li>
            </ul>
            <div className='footer_info'>
              <div className='footer_telegram'><FaTelegram/></div>
              <a href='https://telegram.com'>@telegram</a>
              <a href='tel:+998991234567'>+99 123 45 67</a>
              <ul className='footer_socials'>
                <li><a href='https://www.instagram.com/'><FaInstagram/></a></li>
                <li><a href='https://www.facebook.com/'><FaFacebookF/></a></li>
                <li><a href='mailto:asadmorder@gmail.com'><SiGmail/></a></li>
              </ul>
            </div>
            <ul className='footer_navs'>
              <li className='footer_navs-header'><Link to='/'>Магазин Игрушек</Link></li>
              <li><Link to='/cart'>Корзина</Link></li>
              <li><Link to='/profile'>Мой Профиль</Link></li>
              <li><Link to='/contact'>Контакты</Link></li>
            </ul>
          </div>
          <div className='footer_bottom'>
            <ul className='footer_payment'>
              <li><FaCcVisa /></li>
              <li><FaCcPaypal /></li>
              <li><FaGooglePay /></li>
              <li><FaApplePay /></li>
              <li><FaCcMastercard /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer