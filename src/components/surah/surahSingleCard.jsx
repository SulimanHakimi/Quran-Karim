import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../ui/loading";

function SingleCard() {
  const [ayahs, setAyahs] = useState([]);
  const params = useParams();
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.quran.gading.dev/surah/${params.id}`)
      .then((res) => {
        setAyahs(res.data.data);
        setLoding(false);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <>
      {loding ? (
       <Loading/>
      ) : (
        <div className="md:px-[5vw] px-0 py-0 md:py-[10vh] bg-slate-600">
          <div className="border-b-2 border-slate-600 bg-gray-50 flex justify-evenly font-medium md:text-2xl text-base py-6 md:p-8">
            {}
            <span className=" text-red-600">{ayahs?.revelation?.arab}</span>
            <span className="text-slate-600">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
            <audio autoPlay>
              <source
                src="https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/1"
                type="audio/mpeg"
              />
            </audio>
            <span className=" text-green-600">{ayahs?.name?.long}</span>
          </div>
          {ayahs.verses.map((ayah) => (
            <div className="bg-gray-50">
              <p className="border-b-2 border-slate-600 flex items-start text-end justify-end md:font-medium font-normal md:text-lg text-sm p-2 md:p-5">
                {ayah.text.arab}&nbsp;&nbsp;
                <span className="text-green-700 flex items-start font-medium md:font-bold">
                  ({ayah.number.inSurah})
                  <audio controls className="md:w-40 w-24 h-8 z-10 md:h-10">
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

export default SingleCard;
