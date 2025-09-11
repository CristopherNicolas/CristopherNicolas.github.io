import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CasinoPage from "./components/Casino/CasinoPage";
import Blackjack from "./components/Casino/blackjack";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/casino" element={<CasinoPage />} />
        <Route path="/casino/blackjack" element={<Blackjack />} />
      </Routes>
    </Router>
  );
}

export default App;
