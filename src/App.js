import "./App.scss";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnnapurnaHeliTour from "./Pages/HeliTour/AnnapurnaHeliTour";
import Navbar from "./Commons/Navbar";
import SimpleLayout from "./Layout/SimpleLayout";
import PageNav from "./Components/PageNav";
import Footer from "./Commons/Footer";
import AnnapurnaTrek from "./Pages/AnnaPurnaTrek/AnnapurnaTrek";
import GhorepaniTrek from "./Pages/GhorepaniTrek/GhorepaniTrek";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SimpleLayout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/heli-tour" element={<AnnapurnaHeliTour />} />
            <Route path="/annapurnatrek" element={<AnnapurnaTrek />} />
            <Route path="/ghorepanitrek" element={<GhorepaniTrek />} />
          </Routes>
          <Footer />

        </SimpleLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
