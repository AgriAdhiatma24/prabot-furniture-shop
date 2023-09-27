import "./assets/css/App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Congratulation from "./pages/Congratulation";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/categories/:idc" Component={Details} />
            <Route path="/cart/" Component={Cart} />
            <Route path="/success/" Component={Congratulation} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
