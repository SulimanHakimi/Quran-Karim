import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleCard from "./components/surah/surahSingleCard";
import Home from "./components/home/home";
import JuzCardList from "./components/juz/juzCardList";
import JuzSingleCard from "./components/juz/juzSingleCard";
import Nav from "./components/ui/nav";
import Footer from "./components/ui/footer";
import AyahPage from "./components/ayah/ayahPage";
import SurahCardList from "./components/surah/surahCardList";

function App() {
  return (
    <BrowserRouter>
      <div> 
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surah" element={<SurahCardList />} />
          <Route path="/juz" element={<JuzCardList />} />
          <Route path="/ayahs" element={<AyahPage />} />
          <Route path="/surah/:id" element={<SingleCard />} />
          <Route path="/juz/:id" element={<JuzSingleCard />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
