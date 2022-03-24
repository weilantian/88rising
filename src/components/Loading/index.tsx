import { useEffect, useRef } from "react";
import styled from "styled-components";
import loading from "../../assets/moon.mp4";
import gsap from "gsap";
import GlobalStateContainer from "../../global";
const Loading = () => {
  /*
  This component play the transition video I made in Premiere, 
  with the "88rising" text in different typefaces play in a sequence.
   */
  const t1 = useRef(gsap.timeline({ paused: true }));
  useEffect(() => {
    /*
    useEffect fires when the component is mounted
    t1 is a gsap timeline, that present the typeface shifting video at start, 
    then after 0.4 sec, fade and scale the text away.
    */
    t1.current
      .from(".loader", {
        scale: 2,
        opacity: 0,
        duration: 2,
      })
      .to(".loader", {
        onStart: () => globalStates.setEntered(true),
        delay: 0.4,
        scale: 10,
        opacity: 0,
      });
  }, []);
  const globalStates = GlobalStateContainer.useContainer();
  useEffect(() => {
    if (globalStates.isLoading) {
      t1.current.play();
    }
  }, [globalStates.isLoading]);

  return (
    <LoadingWrapper className="loader">
      <video loop muted autoPlay src={loading} />
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: black;
`;

export default Loading;
