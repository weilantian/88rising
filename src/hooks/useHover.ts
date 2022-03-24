import { useEffect } from "react";
import GlobalStateContainer from "../global";

const useHover = (selector: string, tag: string) => {
  /*
  useHover is a custom hook, it takes the selector of the hoverable element, 
  and the text of the cursor showing on the cursor while it is been hovered.
  */
  const global = GlobalStateContainer.useContainer();

  useEffect(() => {
    const items = document.querySelectorAll(selector);

    const handleOnHover = () => {
      global.setHover({ hovered: true, tag });
    };
    const handleOnLeave = () => {
      global.setHover({ hovered: false, tag });
    };

    items.forEach((item) => {
      item.addEventListener("mouseenter", handleOnHover);
      item.addEventListener("mouseleave", handleOnLeave);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", handleOnHover);
        item.removeEventListener("mouseleave", handleOnLeave);
      });
    };
  }, [selector, tag]);
};
export default useHover;
