import { useEffect, useRef } from "react";
import { MarqueeText, MarqueeWrapper } from "./index.style";
import gsap, { Linear } from "gsap";
import GlobalStateContainer from "../../global";
const MarqueeSection = () => {
  const global = GlobalStateContainer.useContainer();
  /*
  Add marquee animation on the texts. To make it looks seamless and smooth,
  two lines of the text are made, which will be animated alternatingly.
  */
  useEffect(() => {
    const width = document.querySelectorAll(".marquee")[0].clientWidth;
    if (!global.entered) return;
    gsap.to(".marquee", {
      ease: Linear.easeNone,
      repeat: -1,
      duration: 4.2,
      x: -(width + 80),
    });
  }, [global.entered]);

  return (
    <MarqueeWrapper className="marquee-wrapper">
      <div className="wrapper">
        <MarqueeText className="marquee">88 is double happiness</MarqueeText>
        <MarqueeText style={{ marginLeft: 80 }} className="marquee">
          88 is double happiness
        </MarqueeText>
      </div>
    </MarqueeWrapper>
  );
};

export default MarqueeSection;
