import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
    const errorInformation = useRouteError();
    console.log(errorInformation);
  return (
    <div>
        <h1 className='font-bold text-4xl'>There was an Error</h1>
      
    </div>
  )
}

export default ErrorElement
