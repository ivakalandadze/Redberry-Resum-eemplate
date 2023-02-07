import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/info' element={<Info />}/>
        <Route path='/expereince' element={<Experience />}/>
        <Route path='/education' element={<Education />}/>
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
