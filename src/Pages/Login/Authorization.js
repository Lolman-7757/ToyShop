import React from 'react'
import Login from './Login'
import Register from './Register'

function Authorization() {
    return (
        <section className='login'>
            <div className='container'>
                <Login/>
                <Register/>
            </div>
        </section>
    )
}

export default Authorization