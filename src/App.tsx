import gsap from "gsap";
import { useState } from "react";
import Hero from "./components/Hero";
import TV from "./components/TV";
import ResetStyles from "./styles/ResetStyles";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from "./components/Loading";
import GlobalStateContainer from "./global";
import Main from "./components/Main";
import Texture1 from "./assets/images/texture-1.jpg";
import Cursor from "./components/Cursor";
gsap.registerPlugin(ScrollTrigger);

/*
This works as a universal component, 
which imports all the components in the component folder, 
mount them onto the dom.
*/

function App() {
  return (
    <GlobalStateContainer.Provider>
      <div className="App">
        <img className="texture-1" src={Texture1} />
        <Loading />
        <ResetStyles />
        <Cursor />
        <Hero />
        <Main />
      </div>
    </GlobalStateContainer.Provider>
  );
}

export default App;
