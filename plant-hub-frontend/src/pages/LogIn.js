import React, { useEffect, useState } from 'react'
import { auth, provider } from '../Config'
import { signInWithPopup } from 'firebase/auth'
import Home from './Home'
import { userAdd } from '../services/PlantDetail'
import { Logout } from '@mui/icons-material'
// import { response } from 'express'

function LogIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean)
    const [value, setValue] = useState()
    const logIn = () => {
        signInWithPopup(auth, provider).then((data) => {
            // setValue(data.user.email)
            // setIsLoggedIn(true)
            console.log('user is ', isLoggedIn)
            console.log('use osf ', data)
            // localStorage.setItem("user",{
            //     "email": data.user.email,
            //     "name": data.user.displayName,
            //     "phone no": data.user.phoneNumber ?  data.user.phoneNumber :'none'
            // })
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("name", data.user.displayName)
            localStorage.setItem("id", data.user.uid)
            data.user.phoneNumber ? localStorage.setItem("phone no", data.user.phoneNumber) : localStorage.setItem("phone no", 'none')
            // userAdd('patel.panthee.18@gmail.com')


            // this.isLoggedIn= true
            window.location.reload()
        })


            // .then(response => { 
            //     console.log(response) 
            //     userAdd(localStorage.getItem('email'))})
            .catch(err => { console.log(err) })
    }
    const logOut = () => {
        localStorage.clear()
        // setIsLoggedIn(false)
        console.log('user is ', isLoggedIn)

        window.location.reload()
    }
    useEffect(() => {
        setValue(localStorage.getItem('email'))
        console.log(value)
        value ? setIsLoggedIn(true) : setIsLoggedIn(false)
        console.log('isLoggedIn ', isLoggedIn)

        // setValue([ localStorage.getItem('email'), localStorage.getItem('name'),localStorage.getItem('phone no') ])
        userAdd(localStorage.getItem('id'), localStorage.getItem('email'))
            .then(response => { console.log(response) })
            .catch(err => { console.log(err) })
    })
    return (
        <div className='container-fluid wholePage'>

            <div className='authPage'>
                <div className="row d-flex ">
                    <div className="col-12 col-md-6 halfImg"><div className='filter'></div></div>
                    <div className="col-12 col-md-6"></div>
                </div>
                <div className='mainScreen'>
                    <div className='row rounded-3xl border drop-shadow-2xl bg-white'>
                        <div className="col-6 potImg"></div>
                        <div className="col-6 d-flex flex-col align-items-center justify-content-evenly">

                            <div className='display-4 my-1 text-center text-secondary'>
                                {isLoggedIn ? 'Think before logging out yourself' : 'Let\'s get started!'}
                            </div>

                            {
                                isLoggedIn ?
                                    <button type="button" class="logout-with-google-btn" onClick={logOut} >
                                        Logout
                                    </button>
                                    :
                                    <button type="button" class="login-with-google-btn" onClick={logIn}>
                                        Sign in with Google
                                    </button>
                            }

                            <div className='text-md my-2'>
                                <span>1. {isLoggedIn ? 'You will loose' : 'Gain'} access to detailed plant information, providing in-depth insights into various plant species.</span>
                                <br />
                                <span>2. {isLoggedIn ? 'You will loose' : 'Get'} access to like plant.</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* {
                isLoggedIn ?
                    <div>
                        <h4>
                            welcome {localStorage.getItem('name')}
                        </h4>
                        <p>Once you log out you have to login again! please be careful</p>
                    </div>
                    :
                    <div>
                        <p>you have to login to get these features:</p>
                        <ul>
                            <li>For plant details page.</li>
                        </ul>
                    </div>
            }

            {
                value ?
                    <button className='btn btn-danger' onClick={logOut}>Log Out</button>
                    :
                    <button className='btn btn-primary' onClick={logIn}>sign in with google</button>
            } */}
        </div>
    )
}

export default LogIn