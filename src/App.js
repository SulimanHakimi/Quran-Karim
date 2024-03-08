import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleCard from "./components/singleCard";
import Surah from "./components/pages/surah";
import Home from "./components/pages/home";
import Juz from "./components/pages/juz";
import Ayahs from "./components/pages/ayahs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surah" element={<Surah />} />
        <Route path="/juz" element={<Juz />} />
        <Route path="/ayahs" element={<Ayahs />} />
        <Route path="/surah/:id" element={<SingleCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
