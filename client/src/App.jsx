import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Userlogin/Login.jsx';
import Signup from './components/Userlogin/Signup.jsx';
import HomeMain from './components/Home/HomeMain.jsx';
import MainHome from './components/Main/MainHome.jsx';
import Account from './components/Main/Account.jsx';
import Createnew from './components/Main/Createnew.jsx';
import Managebot from './components/Main/Managebot.jsx';
import Rooms from './components/Main/Rooms.jsx';

function App() {


  return (
    <>
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800">

   <Router>
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/main" element={<MainHome />} />
            <Route path="/main/:id" element={<Rooms />} />
            <Route path="/create" element={<Createnew />} />
            <Route path="/manage" element={<Managebot />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
         
          </Routes>
        </Router>
         
   </div>
   
    </>
  )
}

export default App
