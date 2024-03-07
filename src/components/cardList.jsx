import React from "react";
import axios from "axios";
import Card from "./card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function CardList() {
  const [surah, setSurah] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.alquran.cloud/v1/surah")
      .then((res) => {
        setSurah(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-3 my-20 gap-5">
        {surah.map((element) => (
          <Link to={`/surah/${element.number}`}>
            <Card
              number={element.number}
              name={element.name}
              englishName={element.englishName}
              revelationType={element.revelationType}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardList;
