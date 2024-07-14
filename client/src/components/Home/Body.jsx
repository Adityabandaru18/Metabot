import { motion } from 'framer-motion';
import robo1 from "../assets/robo1.png";
import Demo from './Demo';
import costrobo from "../assets/costrobo.png";
import customer from "../assets/customer.png";

const Body = () => {
  return (
    <div className="m-auto">

      <div className="text-center text-white mr-20 ml-20 sm:m-auto">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          Our Services.
        </h2>
      </div>


      {/* <div className="flex items-center justify-center min-h-[530px] relative m-auto max-h-36 mt-28">
        <div className="text-center text-white mr-20">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Tailored Chatbots
          </h2>
          <p className="text-m md:text-xl lg:text-1xl mt-10">
          Create customized chatbots for various businesses without extensive technical knowledge or resources.          </p>
        </div>
 
        <div>
          <img src={robo1} alt='robo1' className='max-w-80 ms:hidden lg:block'/>
        </div>
      </div> */}

      <div className="flex items-center justify-center flex-col sm:flex-row min-h-[500px] relative m-auto max-h-36 mt-28 ml-20 sm:m-auto">

        <motion.div
          className="text-center text-white mr-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold shine-text font-archivo-black">
            Tailored Custom Chatbots
          </h2>
          <p className="text-m md:text-xl lg:text-2xl mt-10">
            Create customized chatbots for various businesses without extensive technical<br /> knowledge or resources.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <img src={robo1} alt='robo1' className='max-w-40 sm:max-w-80 mt-10 sm:mt-0 mr-16 sm:mr-0  sm:block' loading="lazy"/>
        </motion.div>
      </div>

      <div className="flex items-center justify-center flex-col sm:flex-row min-h-[500px] relative m-auto max-h-36 ml-20 sm:m-auto">
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 2.5 }}
    className="order-2 sm:order-1"
  >
    <img src={customer} alt='robo1' className='max-w-60 sm:max-w-96 mt-10 sm:mt-0 mr-16 sm:mr-0' loading="lazy"/>
  </motion.div>

  <motion.div
    className="text-center text-white mr-20 order-1 sm:order-2"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 2.5 }}
  >
    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold shine-text font-archivo-black">
      Improved Custom Service
    </h2>
    <p className="text-xl md:text-xl lg:text-2xl mt-10">
      Enhance customer service experience for SMEs with intelligent chatbots that <br />cater to specific business needs.
    </p>
  </motion.div>
</div>


      <div className="flex items-center justify-center flex-col sm:flex-row min-h-[500px] relative m-auto max-h-36 ml-20 sm:m-auto">
        <motion.div
          className="text-center text-white mr-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 4 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 shine-text font-archivo-black">
            Time and Cost Effective
          </h2>
          <p className="text-m md:text-xl lg:text-2xl mt-10">
            Save time and resources by utilizing our intelligent chatbot solution <br />tailored for SMEs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 4 }}
        >
          <img src={costrobo} alt='robo1' className='max-w-60 sm:max-w-80 mt-10 sm:mt-0 mr-16 sm:mr-0  sm:block' loading="lazy"/>
        </motion.div>
      </div>
      <Demo />


    </div>

  )
}

export default Body
