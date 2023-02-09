import React from 'react'
import { Link } from 'react-router-dom'

export default function Experience() {
  return (
    <div>
        <Link to='/info'><button>უკან</button></Link>
        <Link to='/education'><button>შემდეგი</button></Link>
    </div>
  )
}
