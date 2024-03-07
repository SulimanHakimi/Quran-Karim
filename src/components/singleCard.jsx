import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function SingleCard() {
  const [ayahs, setAyahs] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/${params.id}`)
      .then((res) => {
        setAyahs(res.data.data.ayahs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {ayahs.map((ayah) => (
        <p className="border font-medium text-lg p-5 text-end">
          {ayah.text}
          <span className="text-green-700 font-bold">
            ({ayah.numberInSurah})
          </span>
        </p>
      ))}
    </div>
  );
}

export default SingleCard;
