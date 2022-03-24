import { useState } from "react";
import { useEffect, useRef } from "react";
import { albums } from "../../albumData";
import TVbg from "../../assets/images/tv-modified.png";

/*
The TV component plays the video in a television frame. 
*/

import GlobalStateContainer from "../../global";
import { TVWrapper } from "./index.style";
import gsap from "gsap";
const TV: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const globalStates = GlobalStateContainer.useContainer();
  const [video, setVideo] = useState<string>(albums[0].video);
  useEffect(() => {
    /*
    The change of album could be requested by the AlbumSection. 
    The playing album can be communicated to the TV component by setting globalStates.
    Once the playingAlbum state changes, the useEffect hook will be called, 
    and it will first pause the video,
    fade the video element away, and then present the video source of a new album.
    */
    videoRef.current?.pause();
    gsap
      .timeline()
      .to(videoRef.current, {
        opacity: 0,
        onComplete: () => {
          setVideo(
            albums.find((album) => album.id === globalStates.playingAlbum)!
              .video
          );
        },
      })
      .to(videoRef.current, {
        opacity: 1,
      });
  }, [globalStates.playingAlbum]);

  useEffect(() => {
    videoRef.current?.play();
  }, [video]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current!.play().catch(() => {
        globalStates.setMuted(true);
        setTimeout(() => videoRef.current!.play(), 100);
      });
      return;
    }
  }, [isPlaying]);
  return (
    <TVWrapper>
      <img className="cover" alt="TV" src={TVbg} />
      <video
        loop
        muted={globalStates.muted}
        ref={videoRef}
        onLoadedData={() => {}}
        className="video"
        src={video}
      />
    </TVWrapper>
  );
};

export default TV;
