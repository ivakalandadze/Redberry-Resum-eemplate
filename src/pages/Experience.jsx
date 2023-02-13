import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import JobDescriptionInput from '../components/JobDescriptionInput'


export default function Experience() {

  const {expInfo, setExpInfo,setResume} = useContext(UserContext)
  const [expInfoValidation, setExpInfoValidation] = useState(JSON.parse(localStorage.getItem("expInfoValidation")) || [{
        position: "N/A",
        company: "N/A",
        startDate: "N/A",
        endDate: "N/A",
        jobDescription: "N/A"
  }])
  const [ready, setReady] = useState(false)

  const handleChange = (e) => {
    const {name, value, id} = e.target
    const selectedNumOfExp = id.charAt(id.length-1)
    let prevExps = [...expInfo]
    prevExps[selectedNumOfExp][name] = value
    setExpInfo(prevExps)
      
  }


  const handleAddMoreExp = () => {
    setExpInfo(prevState=>([
      ...prevState,
      {
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        jobDescription: ""
      }
    ]))
    setExpInfoValidation(prevState=>([
      ...prevState,
      {
        position: "N/A",
        company: "N/A",
        startDate: "N/A",
        endDate: "N/A",
        jobDescription: "N/A"
      }
    ]))
  }

  const handleSubmit = () => {
    if(ready){
      setResume(prevState=>({
        ...prevState,
        expInfo:expInfo
      }))
    }
  }

  useEffect(()=>{
    if(expInfoValidation.every(valid=>Object.values(valid).every(value=>value===true))){
      setReady(true)
    }else{
      setReady(false)
    }
    localStorage.setItem("expInfoValidation", JSON.stringify(expInfoValidation))
  },[expInfoValidation])
  
  useEffect(()=>{
    let newVals = [...expInfoValidation]
    newVals.forEach((val,index) => {
      for(const key in val){
        if(key==="position" || key==="company"){
          if(expInfo[index][key].length >= 2){
            newVals[index][key] = true
          }else if(expInfo[index][key].length != 0){
            newVals[index][key] = false
          }else {
            newVals[index][key] = "N/A"
          }
        }
        if(key==="endDate" || key==="startDate" || key==="jobDescription"){
          if(expInfo[index][key]){
            newVals[index][key] = true
          }else {
            newVals[index][key] = false
          }
        }
      }
    })
    setExpInfoValidation(newVals)
    localStorage.setItem("expInfo", JSON.stringify(expInfo))
  },[expInfo])
  const jobDescInputElements = Array.isArray(expInfo) && expInfo.map((exp,index) => (
    <JobDescriptionInput key={index} expInfo={expInfo} handleChange={handleChange} index={index} />
  ))

  return (
    <div className='form-container'>
      <div className='info form-box'>
          <Link to="/"><button className='back-button'>uk</button></Link>
          <div className='form'>
            <div className='form-header'>
                <h3>გამოცდილება</h3>
                <p>2/3</p>
            </div>
            {jobDescInputElements}
            <button onClick={handleAddMoreExp}>მეტი გამოცდილების დამატება</button>
          </div>
      </div>
      <footer className='footer'>
        <Link to='/info'><button>უკან</button></Link>
        <Link className={`${ready ? "" : "disabled-"}next-button`} to='/education'><button className={`${ready ? "" : "disabled-"}next-button`} onClick={handleSubmit}>შემდეგი</button></Link>
      </footer>
    </div>
  ) 
}

