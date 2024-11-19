import axios from "axios";
import React, { useState } from "react";
import Loading from "../ui/loading";

function AyahPage() {
  const [surah, setSurah] = useState(1);
  const [ayah, setAyah] = useState(1);
  const [data, setData] = useState();
  const [loding, setLoding] = useState(false);
  function btnClick() {
    setLoding(true);
    axios
      .get(`https://api.quran.gading.dev/surah/${surah}/${ayah}`)
      .then((res) => {
        setData(res.data.data);
        setLoding(false);
        window.scrollTo(0, 600);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className=" flex mt-[10vh] min-h-screen justify-center flex-col gap-10 items-center">
      <div className="flex items-center justify-center gap-10 w-full bg-gray-200 flex-col h-[100vh]">
        <div className="flex  flex-col md:gap-5 gap-7">
          <div className="md:gap-4 gap-0 md:flex-row flex-col  flex items-center">
            <label
              htmlFor="surah"
              className="text-slate-900 md:text-2xl md:w-fit w-60 text-lg font-semibold"
            >
              Surah No
            </label>
            <input
              id="surah"
              type="number"
              maxLength={3}
              name="surah"
              className="outline-none rounded border py-2 md:w-80 w-60 text-base px-3"
              onChange={(e)=>{
                setSurah(e.target.value);

              }}
            />
          </div>
          <div className="md:gap-6 gap-0 md:flex-row flex-col  flex items-center">
            <label
              htmlFor="ayah"
              className="text-slate-900 md:text-2xl md:w-fit w-60 text-lg font-semibold"
            >
              Ayah No
            </label>

            <input
              type="number"
              maxLength={4}
              id="ayah"
              className="outline-none rounded border py-2 md:w-80 w-60 text-base px-3"
              name="ayah"
              onChange={(e)=>{
                setAyah(e.target.value);

              }}
            />
          </div>
        </div>
        <button
          onClick={btnClick}
          className="md:py-3 py-2 px-4 md:text-2xl text-lg md:px-5 bg-blue-700 text-white w-20 md:w-32 md:ml-20 rounded"
        >
          Find
        </button>
      </div>
      <div className={data?"flex pb-10 min-h-[85vh] gap-10 flex-col w-full px-5 md:px-28 items-end":"hidden"}>
        {loding ? (
          <Loading />
        ) : (
          <>
            <div className="flex md:gap-10 justify-between md:p-4 w-full">
              <p className="text-red-800 font-medium md:font-semibold">
                Ayah in quran ({data?.number?.inQuran})
              </p>
              <p className="text-green-500 font-medium md:font-semibold">
                Ayah in surah ({data?.number?.inSurah})
              </p>
            </div>
            <p className="md:text-2xl text-lg bg-slate-100 w-full font-medium md:font-semibold text-green-800 flex text-end items-start justify-end p-4 gap-3 md:gap-5">
              {data?.text?.arab}
              <audio
                controls
                autoPlay
                className="md:w-32 h-12 w-24 z-10 md:h-6"
              >
                <source src={data?.audio?.secondary[1]} type="audio/mpeg" />
              </audio>
            </p>
            <p className="md:text-2xl text-lg font-semibold w-full p-4 bg-slate-400">
              Translation:
              <span className="md:text-xl text-base font-normal md:font-medium">
                {data?.translation?.en}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default AyahPage;
