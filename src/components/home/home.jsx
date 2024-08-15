import React from "react";
import img from "../../assets/img/recite_7368082.png";
function Home() {
  return (
    <div>
      <div className="min-h-screen flex md:flex-row justify-center  flex-col md:mt-20 mt-10 font-bold md:px-24 px-6 ">
        <div className="md:w-1/2 w-full md:h-screen h-[50vh] flex flex-col justify-center gap-5 ">
          <span className="md:text-5xl text-2xl text-green-800 lg:font-semibold">
            The Prophet said <br />
          </span>
          <span className="md:text-4xl text-xl text-slate-900 lg:font-medium">
            The best among you (Muslims) are those who learn the Qur'an and
            teach it.
          </span>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center ">
          <img
            src={img}
            className="md:h-72 h-60 w-60 md:w-72 mb-20 bg-amber-700 rounded-full p-4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
