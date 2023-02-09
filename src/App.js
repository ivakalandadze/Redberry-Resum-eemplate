import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Resume from './pages/Resume';
import { useState } from 'react';
import { UserContext } from "./context/UserContext"


function App() {

  
  const resumeIsDone = false
  const [personalInfo, setPersonalInfo] = useState(JSON.parse(localStorage.getItem("personalInfo")) || {
    firstName: "",
    lastName: "",
    photo: "",
    aboutMe: "",
    email: "",
    phoneNum: ""
  })
  const [expInfo, setExpInfo] = useState({
    position: [],
    company: [],
    startDate: [],
    endDate: [],
    jobDescription: []
  })
  const [educationInfo, setEducationInfo] = useState({
    place: [],
    degree: [],
    graduationDate: [],
    studyDescription: [],
  })
  return (
    <div className="App">
      <UserContext.Provider value={{personalInfo, setPersonalInfo, expInfo, setExpInfo, educationInfo, setEducationInfo}}>
        {!resumeIsDone && <div className='input-side'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/info' element={<Info />}/>
            <Route path='/experience' element={<Experience />}/>
            <Route path='/education' element={<Education />}/>
          </Routes>
        </div>}
        <div className='resume-side'>
          <Resume />
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
