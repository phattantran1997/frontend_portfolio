import Navbar from "./assets/layout/general/navbar/Navbar";
import "./App.scss";
import HomePage from "./assets/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./assets/layout/components/About/About";
function App() {
  return (
    <div className="mainBg">
      <Navbar />
      <HomePage />
      <div>
          <BrowserRouter>
            <Routes>
              <Route path="/about" element={<About />}>
              </Route>
            </Routes>
          </BrowserRouter>

          </div>
    </div>
  );
}

export default App;
