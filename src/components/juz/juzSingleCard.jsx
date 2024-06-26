import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function JuzSingleCard() {
  const [juz, setJuz] = useState([]);
  const params = useParams();
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.quran.gading.dev/juz/${params.id}`)
      .then((res) => {
        setJuz(res.data.data);
        setLoding(false);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <>
      {loding ? (
        <>
          <div class="h-screen flex justify-center items-center">
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
        <div className="md:px-[5vw] px-0 py-0 md:py-[10vh] bg-slate-600">
          <div className="border-b-2 border-slate-600 bg-gray-50 flex justify-evenly font-medium md:text-2xl text-base py-6 md:p-8">
            {}
            <span className=" text-slate-600">
              Juz <span className="text-green-500">({juz?.juz})</span>
            </span>
            <span className="text-slate-600">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
            <audio autoPlay>
              <source
                src="https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/1"
                type="audio/mpeg"
              />
            </audio>
            <span className=" text-green-600">{juz?.juzEndInfo}</span>
          </div>
          {juz.verses.map((ayah) => (
            <div className="bg-gray-50">
              <p className="border-b-2 border-slate-600 flex items-start text-end justify-end md:font-medium font-normal md:text-lg text-sm p-2 md:p-5">
                {ayah.text.arab}&nbsp;&nbsp;
                <span className="text-green-700 flex items-start font-medium md:font-bold">
                  ({ayah.number.inSurah})
                  <audio controls className="md:w-40 h-8 w-24 z-10 md:h-10">
                    <source src={ayah.audio.primary} type="audio/mpeg" />
                  </audio>
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default JuzSingleCard;
