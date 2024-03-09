import axios from "axios";
import React, { useState } from "react";

function AyahPage() {
  const [surah, setSurah] = useState(1);
  const [ayah, setAyah] = useState(1);
  const [data, setData] = useState();
  const [loding, setLoding] = useState(false);
  function surahInputValue(e) {
    setSurah(e.target.value);
  }
  function ayahInputValue(e) {
    setAyah(e.target.value);
  }
  function btnClick() {
    setLoding(true);
    axios
      .get(`https://api.quran.gading.dev/surah/${surah}/${ayah}`)
      .then((res) => {
        setData(res.data.data);
        setLoding(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className=" flex mt-[10vh] min-h-screen justify-center flex-col gap-10 items-center text-2xl">
      <div className="flex items-center justify-center gap-10 w-full bg-slate-500 flex-col min-h-[70vh]">
        <div className="flex flex-col gap-5">
          <div className=" gap-4 flex items-center">
            <label
              for="surah"
              className="text-slate-900 text-2xl font-semibold"
            >
              Surah No
            </label>
            <input
              id="surah"
              type="number"
              maxLength={3}
              name="surah"
              className="outline-none rounded border py-2 w-80 text-base px-3"
              onChange={surahInputValue}
            />
          </div>
          <div className="gap-6 flex items-center">
            <label for="ayah" className="text-slate-900 text-2xl font-semibold">
              Ayah No
            </label>

            <input
              type="number"
              maxLength={4}
              id="ayah"
              className="outline-none rounded border py-2 w-80 text-base px-3"
              name="ayah"
              onChange={ayahInputValue}
            />
          </div>
        </div>
        <button
          onClick={btnClick}
          className="py-3 px-5 bg-blue-700 text-white w-32 ml-20 rounded"
        >
          Find
        </button>
      </div>
      <div className="flex py-10 min-h-[80vh] gap-10 flex-col w-full px-28 items-end">
        {loding ? (
          <>
            <div class="w-full flex justify-center items-center">
              <svg
                aria-hidden="true"
                class="md:w-14 md:h-14 h-10 w-10 text-gray-200 animate-spin fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-10 justify-center p-4 w-full">
              <p className="text-red-800 font-semibold">
                Ayah in quran ({data?.number?.inQuran})
              </p>
              <p className="text-green-500 font-semibold">
                Ayah in surah ({data?.number?.inSurah})
              </p>
            </div>
            <p className="text-2xl bg-slate-100 w-full font-semibold text-green-800 flex text-end items-start justify-end p-4 gap-5">
              {data?.text?.arab}
              <audio
                controls
                autoPlay
                className="md:w-32 h-12 w-24 z-10 md:h-6"
              >
                <source src={data?.audio?.secondary[1]} type="audio/mpeg" />
              </audio>
            </p>
            <p className="text-2xl font-semibold text-start w-full p-4 bg-slate-400">
              Translation:{" "}
              <span className="text-xl font-medium">
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
