import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function Education() {
  return (
    <div>
        <Link to='/experience'><button>უკან</button></Link>
        <Link to='/education'><button>დასრულება</button></Link>
    </div>
  )
}
