import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div>
      <div>
        sorry! we can not find page you are looking for
        <Link to='/'>home</Link>
      </div>
      
    </div>
  )
}

export default NotFound