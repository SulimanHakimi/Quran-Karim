import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-between z-30 shadow md:px-14 px-2  py-3 w-full fixed top-0 bg-slate-700">
      <div className="flex items-center gap-2 md:gap-5">
        <img
          className="md:w-12 w-10 h-10 md:h-12 rounded-full"
          src="data:image/png;base64,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"
          alt=""
        />
        <span className="md:font-semibold font-medium text-lg md:text-xl text-white">
          Learn Quran
        </span>
      </div>
      <ul className="flex items-center md:text-lg text-xs  md:gap-8 gap-4 text-white">
        <li className="cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to={"/juz"}>Parah</Link>
        </li>
        <li className="cursor-pointer">
          <Link to={"/surah"}>Surah</Link>
        </li>
        <li className="cursor-pointer">
          <Link to={"/ayahs"}>Ayahs</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;