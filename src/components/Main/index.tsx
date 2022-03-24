import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import GlobalStateContainer from "../../global";
import Header from "../Header";
import TV from "../TV";
import thePeople from "../../assets/88-rising-fb-cover.jpg";
import {
  DescriptionSection,
  HeroWrapper,
  MainWrapper,
  Overlay,
  TVWrapper,
} from "./index.style";
import useHover from "../../hooks/useHover";
import { LearnMoreButton } from "../LearnMoreButton";
import AlbumSection from "../AlbumSection";

import MarqueeSection from "../MarqueeSection";
import Footer from "../Footer";

const Main = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const globalStates = GlobalStateContainer.useContainer();

  useEffect(() => {
    /*
    useEffect() is a hook that fires when the component is rendered.
    
    */
    if (!globalStates.entered) {
      return;
    }
    /*
    Defines a timeline that will be used to animate the TV and video, 
    once the scrolling process reaches around 0.076,
    the video will start playing.
    */

    /*
     Scale the TV to let it approaching the audience -> fade the TV frame away after the 2800px away 
     from the start.
     */
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".tv-section",
        start: "top top",
        end: "+=2800",

        pin: true,
        scrub: true,
        onUpdate: ({ progress }) => {
          console.log(progress);
          if (progress > 0.076 && !isVideoPlaying) {
            setIsVideoPlaying(true);
          }
        },
      },
    });
    t1.to(".tv-wrapper", {
      scale: 3,
    })
      .to(".cover", {
        opacity: 0,
      })

      .from(".animate-title", {
        delay: -1,
        opacity: 0,
        scale: 1.2,
        duration: 2,
      })
      .to(".overlay", {
        opacity: 0.6,
      });

    // Add highlight effect while scrolling scroll the description section.
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".description-section",
          start: "top top",

          end: "+=320",
          scrub: true,
        },
      })
      .to(".description, .highlight", {
        color: "rgba(255, 255, 255, 0.4)",
      })
      .to(".highlight", {
        color: "rgba(255, 255, 255, 1)",
        duration: 2,
        stagger: {
          amount: 2,
        },
      });

    // Add parallax scroll effect on the image.
    gsap.to(".members-img", {
      scrollTrigger: {
        trigger: ".description-section",
        start: "top top",
        end: "+=600",
        scrub: true,
      },
      y: -100,
    });
  }, [globalStates.entered]);

  return (
    <MainWrapper hidden={!globalStates.entered}>
      <Header />
      <Overlay className="overlay" />
      <TVWrapper className="tv-wrapper">
        <TV isPlaying={isVideoPlaying} />
      </TVWrapper>
      <div className="tv-section">
        <HeroWrapper>
          <span className="wrapper">
            <h1 className="title-h3 animate-title">88rising</h1>
          </span>
        </HeroWrapper>
      </div>
      <DescriptionSection className="description-section">
        <h3> Who are the 88rising</h3>
        <p className="description">
          Started as a
          <span className="highlight"> music production company</span>, 88rising
          is a small group of people who like to create things and{" "}
          <span className="highlight"> bring them to the world</span>. 88rising
          is now a music collective which expressed the
          <span className="highlight"> asian music culture worldwide.</span>
        </p>
        <LearnMoreButton>learn more</LearnMoreButton>
        <img className="members-img" src={thePeople} />
      </DescriptionSection>

      <AlbumSection />
      <MarqueeSection />
      <Footer />
    </MainWrapper>
  );
};

export default Main;
