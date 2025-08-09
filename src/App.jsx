import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import  Home  from "./pages/Home";
import Navbar from "./components/Navbar";
import Musicbrainz from "./pages/Musicbrainz";
import LastFm from "./pages/LastFm";
import Favourite from "./pages/Favourite";
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/musicbrainz" element={<Musicbrainz />} />
          <Route index path="/lastfm" element={<LastFm />} />
          <Route index path="/favourites" element={<Favourite />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
