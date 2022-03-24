import styled from "styled-components";

export const AlbumItem = styled.div`
  &:hover {
    > .al-cover__wrapper {
      > .al-cover {
        transform: scale(1.6);
      }
    }

    > .info {
      opacity: 0.6;
    }
  }
  margin-left: 32px;

  > .al-cover__wrapper {
    position: relative;
    overflow: hidden;
    width: 400px;
    height: 400px;
    > .tag {
      position: absolute;
      z-index: 2;
      right: 0px;
      top: 20px;
      margin-left: 12px;
      font-size: 8px;
      background-color: white;
      color: black;

      padding: 6px 12px;
      font-family: "Poppins", sans-serif;
    }
    > .al-cover {
      transition: all 0.8s ease-in-out;
      z-index: 4;
      width: 400px;
      height: 400px;
      object-fit: cover;
    }
  }

  > .info {
    > .title {
      display: flex;
      align-items: center;
      > h3 {
        font-size: 32px;
      }
    }
    transition: all 0.3s ease-in-out;
    z-index: 3;
    padding-top: 10px;
  }
`;

export const AlbumSectionWrapper = styled.div`
  > .header {
    margin-left: 220px;
    padding-right: 80px;
    display: flex;
    justify-content: space-between;
    border-bottom: white 1px solid;
    > .button-group {
      display: flex;
      align-items: flex-end;
      > * {
        margin-right: 32px;
      }
    }
    > h1 {
      font-size: 60px;

      font-family: "Poppins", sans-serif;
    }
  }

  > .container {
    > .container-inner {
      transform: translateX(-10px);
      display: flex;
      align-items: flex-start;
    }
    padding-left: 220px;
    overflow-x: hidden;
    margin-top: 40px;
  }
`;

export const ArrowButton = styled.div<{ size: "sm" | "lg" }>`
  border: 1px solid white;
  border-radius: 80px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: black;
    background: white;
  }
  width: ${(props) => (props.size === "sm" ? "96px" : "120px")};
  height: ${(props) => (props.size === "sm" ? "96px" : "120px")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
