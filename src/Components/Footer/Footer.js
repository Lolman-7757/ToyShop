import React from 'react'
// Стили (css)
import './Footer.css'
// Иконки
import { FaCcVisa, FaGooglePay, FaCcPaypal, FaApplePay, FaCcMastercard, FaTelegram, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer-wrapper'>
          <div className='footer_upper'>
            <ul className='footer_navs'>
              <li className='footer_navs-header'>ToyJoy</li>
              <li>Мальчикам</li>
              <li>Девочкам</li>
              <li>Малышам</li>
              <li>Взрослым</li>
            </ul>
            <div className='footer_info'>
              <div className='footer_telegram'><FaTelegram/></div>
              <p>@telegram</p>
              <p>+99 123 45 67</p>
              <ul className='footer_socials'>
                <li><FaInstagram/></li>
                <li><FaFacebookF/></li>
                <li><SiGmail/></li>
              </ul>
            </div>
            <ul className='footer_navs'>
              <li className='footer_navs-header'>Магазин Игрушек</li>
              <li>Корзина</li>
              <li>Мой Профиль</li>
              <li>Контакты</li>
              <li>Магазины</li>
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