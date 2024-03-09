import React from "react";
import Nav from "../nav";
import Footer from "../footer";
import img from "../../assets/img/recite_7368082.png";
function Home() {
  return (
    <div>
      <Nav />
      <div className="min-h-screen flex md:flex-row justify-center  flex-col md:mt-20 mt-10 font-bold md:px-24 px-6 ">
        <div className="md:w-1/2 w-full md:h-screen h-[50vh] flex flex-col justify-center gap-5 ">
          <span className="md:text-2xl text-lg text-slate-900">
            <span className="md:text-5xl text-2xl text-green-800">
              The Prophet said <br />
            </span>
            The best among you (Muslims) are those who learn the Qur'an and
            teach it.
          </span>
          <span className="md:text-base text-slate-900">
            <span className="text-green-800 text-lg">The Prophet said </span>
            Beautify the Quran with your voices
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
      <Footer />
    </div>
  );
}

export default Home;
