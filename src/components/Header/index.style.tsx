import styled from "styled-components";

export const HeaderWrapper = styled.header`
  pointer-events: none;
  padding: 40px 60px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  > .btn-group {
    pointer-events: auto;
    display: flex;
    align-items: center;
    * {
      transition: all 0.2s ease-in-out;
      margin-left: 32px;
      &:hover {
        transform: scale(0.8);
      }
    }
  }
  > .mute {
    pointer-events: auto;
  }
  > .logo {
    pointer-events: auto;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(0.8);
    }
    object-fit: contain;
    width: 100px;
  }
`;
