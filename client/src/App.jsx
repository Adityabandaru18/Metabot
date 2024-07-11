import './App.css'
// import Header from './components/Home/Header.jsx';
// import Body from './components/Home/Body.jsx';
// import Footer from './components/Home/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Userlogin/Login.jsx';
import Signup from './components/Userlogin/Signup.jsx';
import HomeMain from './components/Home/HomeMain.jsx';
import MainHome from './components/Main/MainHome.jsx';
import Account from './components/Main/Account.jsx';
function App() {


  return (
    <>
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800">
        
{/* 
   <Header />
   <Body />
   <Footer /> */}
   <Router>
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/main" element={<MainHome />} />
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
