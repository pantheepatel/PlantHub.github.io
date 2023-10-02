import React, { useEffect, useState } from 'react'
import { auth, provider } from '../Config'
import { signInWithPopup } from 'firebase/auth'
import Home from './Home'

function LogIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean)
    const [value, setValue] = useState()
    const logIn = () => {
        signInWithPopup(auth, provider).then((data) => {
            // setValue(data.user.email)
            // setIsLoggedIn(true)
            console.log('user is ', isLoggedIn)
            // localStorage.setItem("user",{
            //     "email": data.user.email,
            //     "name": data.user.displayName,
            //     "phone no": data.user.phoneNumber ?  data.user.phoneNumber :'none'
            // })
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("name", data.user.displayName)
            localStorage.setItem("id",data.user.uid)
            data.user.phoneNumber ? localStorage.setItem("phone no", data.user.phoneNumber) : localStorage.setItem("phone no", 'none')
            // this.isLoggedIn= true
            window.location.reload()
        })

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
        value?setIsLoggedIn(true):setIsLoggedIn(false)
        console.log('isLoggedIn ',isLoggedIn)

        // setValue([ localStorage.getItem('email'), localStorage.getItem('name'),localStorage.getItem('phone no') ])
    })
    return (
        <div>

            {/* <h4>Welcome to auth page</h4> */}
            {
                isLoggedIn ?
                    <div>
                        <h4>
                            welcome {localStorage.getItem('name')}
                            <br />
                            {/* id is {localStorage.getItem('id')} */}
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
            }
        </div>
    )
}

export default LogIn