import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext} from '../context/UserContext'

export default function Info() {
  const {personalInfo, setPersonalInfo} = useContext(UserContext)
  const [personalInfoValidation, setPersonalInfoValidation] = useState({
    firstName: "N/A",
    lastName: "N/A",
    email: "N/A",
    phoneNum: "N/A"

  })

  const nameRegex = /^[ა-ჰ]+$/;
  const emailRegex = /^[a-zA-Z0-9.]+@redberry.ge$/;
  const phoneNumRegex = /^[+]{1}[\d]{3}[\s|\-]?[\d]{3}[\s|\-]?[\d]{2}[\s|\-]?[\d]{2}[\s|\-]?[\d]{2}[\s|\-]?$/
  useEffect(()=>{
    for (const key in personalInfo){
      if(key==="firstName" || key==="lastName"){
        if(personalInfo[key].length>=2 && personalInfo[key].match(nameRegex)){
          setPersonalInfoValidation(prevVal=>({
            ...prevVal,
            [key]: true
          }))
        }else if(personalInfo[key].length!==0){
          setPersonalInfoValidation(prevVal=>({
            ...prevVal,
            [key]: false
          }))
        }else {
          setPersonalInfoValidation(prevVal=>({
            ...prevVal,
            [key]: "N/A"
          }))
        }
      }
      if(key==="email"){
        if(personalInfo[key].match(emailRegex)){
          setPersonalInfoValidation(prevVal=>({
            ...prevVal,
            [key]: true
          }))
        }else if(personalInfo[key].length!==0){
          setPersonalInfoValidation(prevVal=>({
            ...prevVal,
            [key]: false
          }))
        }else {
          setPersonalInfoValidation(prevVal=>({
            ...prevVal,
            [key]: "N/A"
          }))
        }
      }
      if(key==="phoneNum"){
        if(personalInfo[key].match(phoneNumRegex)){
          setPersonalInfoValidation(prevVal=>({
            ...prevVal,
            [key]: true
          }))
        }else if(personalInfo[key].length!==0){
          setPersonalInfoValidation(prevVal=>({
            ...prevVal,
            [key]: false
          }))
        }else {
          setPersonalInfoValidation(prevVal=>({
            ...prevVal,
            [key]: "N/A"
          }))
        }
      }

    }
    localStorage.setItem("personalInfo",JSON.stringify(personalInfo))
  },[personalInfo])

  const handleChange = (e) => {
    const {name, value} = e.target
    setPersonalInfo(prevInfo=>({
      ...prevInfo,
      [name]: value
    }))
  }
  return (
    <div className='form-container'>
      <div className='info form-box'>
          <Link to="/"><button className='back-button'>uk</button></Link>
          <div className='form'>
            <div className='form-header'>
                <h3>პირადი ინფო</h3>
                <p>1/3</p>
            </div>
            <div className='inputs'>
              <div className="name-input">
                <div className='text-input'>
                  <label htmlFor='firstName'>სახელი</label>
                  <input id="firstName" name="firstName" type="text" placeholder="შეიყვანეთ სახელი" value={personalInfo.firstName} onChange={handleChange}/>
                  <label htmlFor="firstName">მინიმუმ 2 ასო, ქართული ასოები</label>
                </div>
                <div className='text-input'>
                  <label htmlFor='lastName'>გვარი</label>
                  <input id="lastName" name="lastName" type="text" placeholder="შეიყვანეთ გვარი" value={personalInfo.lastName} onChange={handleChange}/>
                  <label htmlFor="lastName">მინიმუმ 2 ასო, ქართული ასოები</label>
                </div>
              </div>
              <input name="photo" type="file" multiple accept="image/*" onChange={handleChange}/>
              <div className='about-input'>
                <label htmlFor='aboutMe'>ჩემ შესახებ(არასავალდებულო)</label>
                <textarea id="aboutMe" name='aboutMe' value={personalInfo.aboutMe} onChange={handleChange} rows={6} cols={72}/>
              </div>
              <div className='email-input'>
                <label htmlFor='email'>ელ.ფოსტა</label>
                <input type="email" name="email" id="email" placeholder="შეიყვანეთ ელ.ფოსტა" value={personalInfo.email} onChange={handleChange}/>
                <label htmlFor='email'>უნდა მთავრდებოდეს @redberry.ge-თი</label>
              </div>
              <div className="phoneNum-input">
                <label htmlFor="phoneNum">მობილურის ნომერი</label>
                <input type="tel" id="phoneNum" name="phoneNum" placeholder="შეიყვანეთ ტელ.ნომერი" value={personalInfo.phoneNum} onChange={handleChange}/>
                <label htmlFor="phoneNum">უნდა აკომაყოფილებდეს ქართული მობილური ნომრის ფორმატს</label>
              </div>
            </div>
          </div>
      </div>
      <footer className='footer'>
        <Link to="/experience"><button>შემდეგი</button></Link>
      </footer>
    </div>
  )
}
