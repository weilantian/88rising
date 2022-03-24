import styled from "styled-components";

export const HeroWrapper = styled.div`
  > h3 {
    font-size: 40px;
    font-style: italic;
    margin-top: 18px;
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;

  > .btn {
    &:hover {
      > .btn-info {
        transform: scale(0.8);
      }
    }

    position: relative;
    > .btn-info {
      transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s;
      position: absolute;
      left: 33%;
      top: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 40px;
      > img {
        width: 50px;
        height: 50px;
      }
    }
    > .btn-ring {
      margin-top: 80px;
      width: 240px;
      height: 240px;
    }
  }
`;

export const SoundControlButtonWrapper = styled.div<{ muted: boolean }>`
  display: flex;
  font-size: 24px;
  align-items: center;
  padding: 8px 24px;

  > .box {
    margin-left: 17px;
    width: 18px;
    height: 18px;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      content: "";
      display: ${(props) => (props.muted ? "none" : "block")};
      background: white;
      width: 10px;
      height: 10px;
      position: absolute;
    }
  }
`;
