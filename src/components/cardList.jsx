import React from "react";
import axios from "axios";
import Card from "./card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./popup";
import Nav from "./nav";
import Footer from "./footer";
function CardList() {
  const [surah, setSurah] = useState([]);
  const [popup, setPopup] = useState(true);
  setTimeout(() => {
    setPopup(false);
  }, 2000);

  useEffect(() => {
    axios
      .get("https://api.alquran.cloud/v1/surah")
      .then((res) => {
        setSurah(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Nav />
      <div className="grid lg:grid-cols-3 mt-32 sm:grid-cols-2 my-20 gap-5">
        {popup ? (
          <>
            <Popup />
          </>
        ) : (
          <></>
        )}
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
      <Footer/>
    </div>
  );
}

export default CardList;
