import '../../styles/App.css';
import {Routes, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import LogIn from '../LogIn/LogIn.js';
import Profile from '../Profile/Profile.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;