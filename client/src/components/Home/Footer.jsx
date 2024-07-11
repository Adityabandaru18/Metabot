

const Footer = () => {
  return (
    <div className="m-auto">

      <div className="flex items-center justify-center min-h-[530px] relative m-auto max-h-36 mt-28 sm:m-auto ml-20">
        <div className="text-center text-white mr-20">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Start Chatbot Development.
          </h2>
          <p className="text-m md:text-xl lg:text-1xl mt-10 ">
            &quot;MetaBots chatbot development tool is user-friendly and efficient. It has
            helped us streamline <br />our customer service process and
            improve response times. - Customer&quot; - Natalie Ramirez    </p>
          <div className="mt-8">

            <input type="email" placeholder="Drop a message" className="w-72 bg-white text-black rounded-[5px] m-auto border-black p-3 mr-5 ml-10 sm:ml-0" />

            <button className="bg-green-600 text-white font-semibold rounded-[5px] p-3 mt-4 sm:mt-0">Get Started</button>
          </div>
        </div>



      </div>
        <hr className="w-full text-gray-50 bg-gray-50" />
        <div className="cursor-pointer">
          <div className="flex flex-row items-center justify-center mt-10 mb-10">

            <p className="text-white inline-block mr-16">Chatbot development</p>
            <p className="text-white inline-block">About Us</p>

          </div>
          <div className="text-white flex flex-row items-center justify-center relative bottom-4">
            @All rights reserved
          </div>
        </div>


    </div>
  )
}

export default Footer
