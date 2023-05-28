import React, { useState, useEffect } from 'react'
// Стили (css)
import './Header.css'
import { Modal } from 'antd'

// Иконки
import { BiSearch } from 'react-icons/bi'
import { SlPresent } from 'react-icons/sl'
import { CiCirclePlus } from 'react-icons/ci'
import { IoPersonOutline } from 'react-icons/io5'
import { BsCart, BsPerson, BsFilterRight } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import https from '../../Assets/https'

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    
  };

  const arr = [
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
  ]
  

  const [modal, setModal] = useState(false)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const token = window.localStorage.getItem("token")
  const [isAdmin, setIsAdmin] = useState(false)
  const [ cartAmount, setCartAmount ] = useState([])
  const [ number, setNumber ] = useState(0)

  useEffect(() => {
    if(window.localStorage?.getItem("someID") != null){
      https.get(`carts/${window.localStorage.getItem("someID")}`)
      .then(res => {
        res.data.data.products.map(item =>{
          setCartAmount(cartAmount.push(Number(item.quantity)))
        })
        
        setNumber(cartAmount.reduce((a,b) => a+b)/2)
        // res.data.data.products.map(item =>{

        //   setCartAmount(cartAmount + item.quantity)
        //   console.log(cartAmount)
        // })
      })
      https.get(`/users/${window.localStorage?.getItem("someID")}`)
        .then(res => {
          if (res?.data?.data?.roles[0]?.name == "admin") { setIsAdmin(true); console.log(isAdmin) }
          else { setIsAdmin(false); console.log(isAdmin) }
        })
        .catch(err => alert(err))
    }
    
  }, [])
  return (
    <>
      <Modal title="Панель Админа" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Link onClick={() => handleOk()} className='header_modal-links' to='/addproduct'>Добавить Товар</Link>
        <Link onClick={() => handleOk()} className='header_modal-links' to='/orders'>Заказы</Link>
      </Modal>
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
              <Link to={token ? '/cart' : '/login'} className='header_cart'>
                <BsCart />
                <span>{number}</span>
              </Link>
              <Link to={token ? '/profile' : '/login'}><IoPersonOutline /></Link>
              {isAdmin? <button onClick={showModal} ><CiCirclePlus/></button> : <></>}
            </div>
          </div>
          <div className='header_bar-btn' onClick={() => { setModal(!modal) }}>
            {modal ? <RxCross1 /> : <BsFilterRight />}
          </div>
        </div>
        <div className={`modal ${modal ? 'modal_opened' : 'modal_closed'}`}>
          <div className={`container ${modal ? 'container_opened' : 'container_closed'}`}>
            <div className='header_btn-block'>
              <Link to={token ? '/cart' : '/login'} onClick={() => { setModal(!modal) }} className='header_cart'>
                <BsCart />
                <span>{number}</span>
              </Link>
              <Link to={token ? '/profile' : '/login'} onClick={() => { setModal(!modal) }}><IoPersonOutline /></Link>
              {isAdmin? <button onClick={showModal} ><CiCirclePlus/></button> : <></>}
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