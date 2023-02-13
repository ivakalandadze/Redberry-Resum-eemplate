import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default function Home() {
  const {resumeIsDone,setPersonalInfo, setExpInfo, setEducationInfo, setResume } = useContext(UserContext)
  useEffect(()=>{
    localStorage.clear()
    setPersonalInfo({
      firstName: "",
      lastName: "",
      photo: "",
      aboutMe: "",
      email: "",
      phoneNum: ""
    })
    setExpInfo([{
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      jobDescription: ""
    }])
    setEducationInfo([{
      place: "",
      degree: "",
      graduationDate: "",
      studyDescription: "",
    }])
    setResume({
      personalInfo: "",
      expInfo: "",
      educationInfo: ""
    })
  },[])
  return (
    <div>
        <Link to="Info"><button>რესუმეს დამატება</button></Link>
    </div>
  )
}
