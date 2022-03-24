import useHover from "../../hooks/useHover";
import { LearnMoreButtonWrapper } from "./index.style";
import { IoChevronForward } from "react-icons/io5";
import GlobalStateContainer from "../../global";

export const LearnMoreButton: React.FC = () => {
  useHover(".main-interactive", "Go");
  const global = GlobalStateContainer.useContainer();
  // Once the user clicks the learn more button, the video will be programmatically paused.
  return (
    <LearnMoreButtonWrapper
      onClick={() => global.setMuted(true)}
      href="https://www.youtube.com/watch?v=N_pd-jp0oa4"
      target="_blank"
      className=" main-interactive"
    >
      Learn More
      <IoChevronForward />
    </LearnMoreButtonWrapper>
  );
};
