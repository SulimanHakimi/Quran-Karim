import React from "react";
import axios from "axios";
import JuzCard from "./juzCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../ui/loading";

function JuzCardList() {
  const [juz, setJuz] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    axios
      .get("https://sulimanhakimi.github.io/quran-karim-parahs-api/juz.json")
      .then((res) => {
        setJuz(res.data.juzs);
        setLoding(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {loding ? (
       <Loading/>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-32 md:grid-cols-2 my-20 gap-5">
            {juz.map((element) => (
              <Link to={`/juz/${element.id}`}>
                <JuzCard number={element.juz_number} name={element.name} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default JuzCardList;
