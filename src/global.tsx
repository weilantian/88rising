import { useState } from "react";
import { createContainer } from "unstated-next";

// This is the file that containing all the global state of the site.
// The global states are basically variables that can be read and write across different component.

const GlobalStateContainer = createContainer(() => {
  const [muted, setMuted] = useState(false);
  // Defines whether the video is muted or not.
  const [entered, setEntered] = useState(false);
  // Defines whether the user has clicked the enter button or not.
  const [isLoading, setIsLoading] = useState(false);
  // Defines whether the typeface sequence video is playing all not
  const [hover, setHover] = useState({
    hovered: false,
    tag: "",
  });
  /*
  Defines whether the user is hovering over a specific component or not, and specify 
  the text will be shown while hovering.
  */
  const [playingAlbum, setPlayingAlbum] = useState(1);
  /* Define the album id that is playing */
  return {
    isLoading,
    setIsLoading,
    entered,
    setEntered,
    muted,
    setMuted,
    hover,
    setHover,
    playingAlbum,
    setPlayingAlbum,
  };
});

export default GlobalStateContainer;
