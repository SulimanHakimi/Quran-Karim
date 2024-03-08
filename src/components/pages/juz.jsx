import React, { useState } from "react";
import Nav from "../nav";
import Footer from "../footer";
import JuzCard from "../juzCard";
import axios from "axios";
function Juz() {
  const [juz, setJuz] = useState([]);
  axios
    .get("https://api.quran.gading.dev/surah/")
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  return (
    <div>
      <Nav />
      <JuzCard />
      <Footer />
    </div>
  );
}

export default Juz;
