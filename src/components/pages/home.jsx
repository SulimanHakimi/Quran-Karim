import React from "react";
import Nav from "../nav";
import Footer from "../footer";
import img from "../../assets/img/recite_7368082.png";
function Home() {
  return (
    <div>
      <Nav />
      <div className="min-h-screen flex mt-20 font-bold px-24">
        <div className="w-1/2 h-screen flex flex-col justify-center gap-5 ">
          <span className="text-2xl text-slate-900">
            <span className="text-5xl text-green-800">
              The Prophet said <br />
            </span>
            The best among you (Muslims) are those who learn the Qur'an and
            teach it.
          </span>
          <span className="text-base text-slate-900">
            <span className="text-green-800 text-lg">The Prophet said </span>
            Beautify the Quran with your voices
          </span>
        </div>
        <div className="w-1/2 flex justify-center items-center ">
          <img
            src={img}
            className="h-72 w-72 mb-20 bg-amber-700 rounded-full p-4"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
