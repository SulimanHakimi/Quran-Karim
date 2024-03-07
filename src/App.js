import CardList from "./components/cardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleCard from "./components/singleCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/surah/:id" element={<SingleCard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
