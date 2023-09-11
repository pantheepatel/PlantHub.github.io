import React, { useEffect, useState } from 'react'
import Home from './Home'


function LogOut() {
  const [value, setValue] = useState([{}])

  const logOut = () => {
    localStorage.clear()
    window.location.reload()
  }
  useEffect(() => {
    setValue(null)
    // setValue([ localStorage.getItem('email'), localStorage.getItem('name'),localStorage.getItem('phone no') ])
  })
  return (
    <div>
      {/* {
        value ? <button className='btn btn-danger' onClick={logOut}>Log Out</button> :
          <Home />
      } */}

      <button className='btn btn-danger' onClick={logOut}>Log Out</button>

    </div>
  )
}

export default LogOut