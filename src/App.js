import React from "react";
import reviews from "./data";
import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-[#d8b4fe]">
      <div className="text-center">
        <h1 className="text-3xl font-bold uppercase drop-shadow-xl ...">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        <Testimonial reviews={reviews} />
      </div>
      </div>
  )
};

export default App;
