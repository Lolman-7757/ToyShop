import React, { useState, useEffect } from 'react'
import Authorization from '../Login/Authorization'
import https from '../../Assets/https'
import './Profile.css'
import { Link, useLocation } from "react-router-dom";

function Profile() {


    const [userName, setUserName] = useState({})
    const [userPhone, setUserPhone] = useState({})
    const [userEmail, setUserEmail] = useState({})
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token) {
            https.get(`/users/${window.localStorage.getItem("someID")}`)
                .then(res => setUserName(res.data.data))
                .catch(err => console.log(err))
        }
    }, [])
    const token = window.localStorage.getItem("token")
    if (token) {
        return (
            <section className='profile'>
                <div className='container'>
                    <div className='profile-img'>
                        <img alt='profile_img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png' />
                    </div>
                    <div className='profile_info'>
                        <h2> {userName.name} </h2>
                        <p>Телефон : {userName.phone}</p>
                        <p>Адресс : {userName.email}</p>
                        <Link to='/login'>
                            <button onClick={() => {
                                window.localStorage.removeItem("token");
                                window.localStorage.removeItem("someID")
                            }}>
                                Выйти из Аккаунта
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        )
    } else {
        return <Authorization />
    }
    // if (token) {
    //     https.get(`/users/${window.localStorage.getItem("someID")}`)
    //         .then(res => {
    //             setUserName(res.data.data.name)
    //             setUserPhone(res.data.data.phone)
    //             setUserEmail(res.data.data.email)
    //             console.log(userName,userPhone,userEmail)
    //             return (
    //                 <section className='profile'>
    //                     <div className='container'>
    //                         <div className='profile-img'>
    //                             <img alt='profile_img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png' />
    //                         </div>
    //                         <div className='profile_info'>
    //                             <h2> {userName} </h2>
    //                             <p>Телефон : {userPhone}</p>
    //                             <p>Адресс : {userEmail}</p>
    //                         </div>
    //                     </div>
    //                 </section>
    //             )
    //         }
    //         )
    //         .catch(err => {
    //             console.log(err)
    //             return <Authorization />
    //         })
    //     }
}

export default Profile