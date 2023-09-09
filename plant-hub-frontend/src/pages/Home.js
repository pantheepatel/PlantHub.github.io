// to give overview of website
import React from 'react'

function Home() {
  const logOut=()=>{
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div>Home
      <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default Home