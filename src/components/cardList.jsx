import React from "react";
import axios from "axios";
import Card from "./card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CardList() {
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.quran.gading.dev/surah")
      .then((res) => {
        setSurah(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="grid lg:grid-cols-3 mt-32 sm:grid-cols-2 my-20 gap-5">
        {surah.map((element) => (
          <Link to={`/surah/${element.number}`}>
            <Card
              number={element.number}
              name={element.name.long}
              englishName={element.name.transliteration.en}
              revelationType={element.revelation.en}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardList;
