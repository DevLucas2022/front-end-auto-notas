import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateProfessor from "./components/createProfessor";
import GetProfessor from "./components/getProfessor";
import UpdateProfessor from "./components/updateProfessor";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<CreateProfessor />} />
        <Route path="/update" element={<UpdateProfessor />} />
        <Route path="/get" element={<GetProfessor />} />
      </Routes>
    </Router>
  );
};
export default App;
