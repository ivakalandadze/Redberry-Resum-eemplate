import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function Home() {
  const {resumeIsDone} = useContext(UserContext)
  return (
    <div>
        <div>{resumeIsDone? "lomi" : "vefxvi"}</div>
        <Link to="Info"><button>რესუმეს დამატება</button></Link>
    </div>
  )
}
