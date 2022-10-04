import React from "react";
import { Route } from "react-router";

import HomePage from "./components/home-page/home-page.component";
import SlideshowPage from "./components/slideshow-page/slideshow-page.component";

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/slideshow" component={SlideshowPage} />
    </>
  );
}

export default App;
