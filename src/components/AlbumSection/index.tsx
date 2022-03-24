/*
Albums section of the site.
*/

import { AlbumItem, AlbumSectionWrapper, ArrowButton } from "./index.style";

import useHover from "../../hooks/useHover";
import { albums } from "../../albumData";
import GlobalStateContainer from "../../global";
import { useEffect } from "react";
import gsap from "gsap";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useRef } from "react";

const AlbumSection = () => {
  const global = GlobalStateContainer.useContainer();
  /*
  React rerenders the component when the content of the website changes. To achieve better performance, all the
  variables needs to be define in a ref like the one below.
  */
  const position = useRef(0);
  /* 
  Functions that start with a use keyword are hooks. Hooks are functions that are used to create custom react components.
  */
  useHover(".album", "Play");

  useEffect(() => {
    if (!global.entered) return;
  }, [global.entered]);

  /*
  Handlers are functions that called when a dom event fires.
  */
  const backHandler = () => {
    if (position.current === 0) return;
    position.current -= 1;
    // If the scrolling does not reach its edge, the scroll position will be head to 600px from the right.
    gsap.to(".container-inner", {
      x: -position.current * 600,
    });
  };

  const forwardHandler = () => {
    if (position.current === 2) return;
    position.current++;
    // If the scrolling does not reach its edge, the scroll position will be head to 600px from the left.
    gsap.to(".container-inner", {
      x: -position.current * 600,
    });
  };

  /* 
  Switch the album id in the global state so that the component playing the video will be updated.
  */
  const albumClickHandler = (id: number) => {
    global.setPlayingAlbum(id);
  };
  return (
    <AlbumSectionWrapper className="album-section">
      <div className="header">
        <h1>Albums</h1>
        <div className="button-group">
          <ArrowButton onClick={backHandler} size="sm">
            <IoArrowBack size={64} />
          </ArrowButton>
          <ArrowButton onClick={forwardHandler} size="lg">
            <IoArrowForward size={64} />
          </ArrowButton>
        </div>
      </div>

      <div className="container">
        <div className="container-inner">
          {albums.map((album) => (
            <AlbumItem
              onClick={() => albumClickHandler(album.id)}
              className="album"
              key={album.title}
            >
              <div className="al-cover__wrapper">
                <img className="al-cover" src={album.img} alt={album.title} />
                {album.id == global.playingAlbum && (
                  <span className="tag">Now playing</span>
                )}
              </div>
              <div className="info">
                <div className="title">
                  <h3>{album.title}</h3>
                </div>
                <p>{album.artists}</p>
              </div>
            </AlbumItem>
          ))}
        </div>
      </div>
    </AlbumSectionWrapper>
  );
};

export default AlbumSection;
