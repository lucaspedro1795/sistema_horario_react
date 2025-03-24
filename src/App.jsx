import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Home from "./pages/home/Home";
import Disciplinas from "./pages/disciplinas/disciplinas";
import Turmas from "./pages/turmas/turmas";
import Professores from "./pages/professores/professores";

function App(){
  return (
    <Router>
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
          <Route path="/turmas" element={<Turmas />} />
          <Route path="/professores" element={<Professores />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;