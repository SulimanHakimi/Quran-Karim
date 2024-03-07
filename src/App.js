import CardList from "./components/cardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleCard from "./components/singleCard";
import Popup from "./components/popup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/surah/:id" element={<SingleCard />} />
        <Route path="/popup" element={<Popup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
