import React from "react";

function JuzCard(juz) {
  return (
    <div className="">
      <div className="w-80 h-24 px-5 bg-slate-100 rounded-md hover:shadow-2xl shadow-md flex justify-evenly items-center">
        <span className="font-semibold text-blue-700">Para {juz.number}</span>
        <span className="font-bold">{juz.name}</span>
      </div>
    </div>
  );
}

export default JuzCard;
