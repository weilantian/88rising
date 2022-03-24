import styled from "styled-components";

export const MainWrapper = styled.div`
  color: white;
  display: ${(props) => (props.hidden ? "none" : "block")};
  > .tv-section {
    overflow: hidden;
    height: 100vh;
    width: 100%;
  }
`;

export const TVWrapper = styled.div`
  z-index: -2;
  flex-direction: column;
  transform: scale(1);
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  transform: translate(-50%, -50%);
  align-items: center;
  > p {
    margin-top: 12px;
    font-size: 24px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  background-color: black;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const HeroWrapper = styled.div`
  > span {
    position: absolute;
    bottom: 80px;
    width: 100%;

    display: block;
    > .title-h3 {
      text-align: center;
      margin-block: none;
      font-size: 28vw;
      line-height: 280px;
    }
  }
`;

export const DescriptionSection = styled.div`
  font-family: "Poppins", sans-serif;
  padding-left: 120px;
  position: relative;
  padding-bottom: 300px;
  > .members-img {
    position: absolute;
    bottom: 0px;
    right: 80px;
    z-index: -1;
  }
  > h3 {
    line-height: 120px;
    max-width: 800px;
    font-size: 100px;
  }
  > p {
    color: white;
    font-size: 58px;
    line-height: 60px;
    text-transform: uppercase;
    max-width: 900px;
    margin-top: 120px;
    font-weight: 600;
    > .highlight {
      font-weight: 700;
    }
  }
`;
