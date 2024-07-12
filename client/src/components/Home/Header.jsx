
import Metabot from "../assets/Metabot.png";
import robo from "../assets/robo.png";
import { NavLink } from 'react-router-dom';

function Header() {


  return (
    <>
  <div className="m-auto">

    <div className="absolute p-4 flex items-center space-x-4 mt-3 z-20">
        <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 ml-3">
          ME<img src={Metabot} className="max-w-7 inline-block mb-2" alt="Metabot Logo" />ABOT
        </h1>
      </div>
      <div className="flex items-center justify-center flex-col sm:flex-row min-h-screen relative ml-20 sm:m-auto">
        <div className="text-center text-white mr-20">
          <h2 className="text-xl md:text-xl lg:text-4xl font-archivo-black">
            INTELLIGENT <p className="text-[#48c6ef] inline-block shadow-sm">CHATBOT</p> DEVELOPMENT
          </h2>
          <p className="text-m md:text-xl lg:text-1xl mt-4">
            Enhance customer service for SMEs with custom chatbots.
          </p>
        <NavLink to="/login"> <button className="get-started-btn">Get Started</button> </NavLink> 
        </div>
 
        <div>
          <img src={robo} alt='robo1' className='sm:max-w-80 max-w-52 relative top-20 sm:top-0 mr-20 sm:mr-0 sm:block animate-bounce '/>
        </div>
      </div>
   

  </div>
    </>
  )
}

export default Header;
