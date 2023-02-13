import React, { useContext, useEffect } from 'react'
import JobDescriptionOutput from '../components/JobDescriptionOutput'
import { UserContext } from '../context/UserContext'

export default function Resume() {
  const {resume} = useContext(UserContext)

  const expInfoElements = resume.expInfo && resume.expInfo.map((exp,index)=>(
    <JobDescriptionOutput key={index} exp={exp} />
  ))
  
  return (
    <div className='resume-container'>
      <div className='personal-info-container'>
        <h1 className='resume-name'>{resume.personalInfo.firstName} {resume.personalInfo.lastName}</h1>
        <p className="resume-email">{resume.personalInfo.email}</p>
        <p className="resume-phone">{resume.personalInfo.phoneNum}</p>
        {resume.personalInfo.aboutMe && 
          <div>
            <h3>ჩემ შესახებ</h3>
            <p>{resume.personalInfo.aboutMe}</p>
          </div>
        }
        <img src={resume.personalInfo.photo} />
      </div>
      {
      resume.expInfo && 
      <div className="exp-info-container">
        <h3 className="exp-header">გამოცდილება</h3>
        {expInfoElements}
      </div>
      }
    </div>
  )
}
