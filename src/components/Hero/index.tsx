import TV from "../TV";
import { HeroWrapper, SoundControlButtonWrapper } from "./index.style";

import btn from "../../assets/images/btn.svg";
import finger from "../../assets/images/finger.svg";
import { useEffect, useRef } from "react";
import gsap, { Linear } from "gsap";
import GlobalStateContainer from "../../global";
import useHover from "../../hooks/useHover";
import { IoVolumeHigh } from "react-icons/io5";

/*
Read carefully the code below.
This is the component first been seen in the site. 
There are two main reasons for making this component.
The first is to add a sense of impressiveness as the audience clicked the Enter button
The next thing is to give more time for the video to buffer by covering in loading process with animations.
*/

export const Hero = () => {
  useHover(".interactive", "Enter");
  const globalStates = GlobalStateContainer.useContainer();
  const t1 = useRef(
    gsap.timeline({
      onReverseComplete: () => globalStates.setIsLoading(true),
    })
  );
  useEffect(() => {
    // The button would show up gradually starting with scaling factor of 0.
    // (Scale from invisible to visible)
    t1.current.from(".btn", {
      scale: 0,
      duration: 1.2,
    });

    //Let the button ring to spin.
    gsap.to(".btn-ring", {
      rotation: "+=360",
      repeat: -1,
      ease: Linear.easeNone,
      transformOrigin: "50% 50%",
      duration: 10,
    });
  }, []);

  if (globalStates.entered) {
    return null;
  }
  return (
    <HeroWrapper className="hero-section">
      <div
        onClick={() => {
          t1.current.timeScale(2).reverse();
        }}
        className="btn interactive"
      >
        <img className="btn-ring" src={btn} />
        <div className="btn-info">
          <img src={finger} />
          <p>Enter</p>
        </div>
      </div>
      <div style={{ marginTop: 80 }}>
        <SoundControlButton />
      </div>
    </HeroWrapper>
  );
};

export const SoundControlButton = () => {
  const globalStates = GlobalStateContainer.useContainer();
  return (
    <SoundControlButtonWrapper
      onClick={() => globalStates.setMuted((m) => !m)}
      muted={globalStates.muted}
    >
      <IoVolumeHigh />
      &nbsp;&nbsp;Sound ON <div className="box"></div>
    </SoundControlButtonWrapper>
  );
};

export default Hero;
