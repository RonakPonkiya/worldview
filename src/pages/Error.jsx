import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
    const error =  useRouteError()
  return (
    <div>
      <h1>error</h1>
    </div>
  )
}

