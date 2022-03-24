import { useEffect, useRef } from "react";
import { CursorWrapper } from "./index.style";
import gsap from "gsap";
import GlobalStateContainer from "../../global";

/* 
  Cursor component
 */

export const Cursor = () => {
  //Communicate with other components via a react context.
  const global = GlobalStateContainer.useContainer();

  const t1 = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    // Setup cursor behavior by describing animations in a gsap animation timeline
    // Predefine the cursor animation
    t1.current
      .to(".cursor", {
        width: 128,
        height: 128,
        duration: 0.2,
        opacity: 0.8,
      })
      .to(".cursor > span", {
        display: "block",
      });
  }, []);

  useEffect(() => {
    // Update cursor behavior based on global state
    if (global.hover.hovered) {
      /*
      When the cursor received that it is hovered on other component,
      the timeline will be played.
      */
      t1.current.play();
    } else {
      /*
      When the cursor is notified leaving the component,
      the timeline will be reversed.
      */
      t1.current.reverse();
    }
  }, [global.hover.hovered]);

  useEffect(() => {
    // Update cursor position based on native cursor position
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      // Remove event listener when the component is unmounted to AVOID MEMORY LEAK
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const handleMouseMove = (e: MouseEvent) => {
    gsap.to(".cursor", {
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <CursorWrapper className="cursor">
      <span>{global.hover.tag || "Click"}</span>
    </CursorWrapper>
  );
};

export default Cursor;
