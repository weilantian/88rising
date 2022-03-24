import { HeaderWrapper } from "./index.style";
import logo from "../../assets/logo.png";
import useHover from "../../hooks/useHover";
import { IoTv, IoTvOutline, IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import GlobalStateContainer from "../../global";
import { useEffect } from "react";

export const Header = () => {
  /*
  window.scrollTo is a javascript api that allows us to scroll to a certain point on the page, and the
  scrolling behavior can be defined by the second argument.
  https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
  */
  return (
    <HeaderWrapper>
      <img
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="logo"
        src={logo}
      />
      <div className="btn-group">
        <TvControl />
        <SoundControl />
      </div>
    </HeaderWrapper>
  );
};

export const SoundControl = () => {
  const global = GlobalStateContainer.useContainer();
  useHover(".mute", global.muted ? "Unmute" : "Mute");
  return (
    <div onClick={() => global.setMuted((m) => !m)} className="mute">
      {global.muted ? <IoVolumeMute size={48} /> : <IoVolumeHigh size={48} />}
    </div>
  );
};

export const TvControl = () => {
  useHover(".tv-mode-btn", "Watch in CRT");
  return (
    <div
      title="Watch in TV view"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="tv-mode-btn"
    >
      <IoTvOutline size={48} />
    </div>
  );
};

export default Header;
