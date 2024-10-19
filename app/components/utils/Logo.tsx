import React from 'react'
import logoImage from '~/images/main-logo.png'

function Logo() {
  return (
    <div className='flex flex-row items-center p-2 gap-2 mb-4 h-[10vh]'>
        <img src={logoImage} alt="main-logo" />
        <h1 className='font-semibold text-primary-main'>Expense Manager</h1>
    </div>
  )
}

export default Logo