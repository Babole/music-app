import React from "react";
import { Routes, Route } from 'react-router-dom'

import { Header } from './layout'
import { Home, AllArtists, Artist } from './pages'

function App() {

  return (
    <>
      <Header />
      {/* <AllArtists /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists">
          <Route index element={<AllArtists />} />
          <Route path=":artistId" element={<Artist />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
