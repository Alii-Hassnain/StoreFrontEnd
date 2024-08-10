import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-neutral py-2 text-neutral-content'>
      <div className='flex align-element justify-end'>

      <div className='flex justify-center gap-x-6'>
        <Link to="/login" className='text-xs link-hover'>
            Sign in / Guest
        </Link>
        <Link to="/register" className='text-xs link-hover'>
            Create Account
        </Link>

      </div>
      </div>

    </header>
  )
}

export default Header