import "./assets/css/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" Component={HomePage} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
