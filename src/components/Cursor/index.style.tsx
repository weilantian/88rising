import styled from "styled-components";

export const CursorWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  pointer-events: none;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 120px;
  background-color: white;
  > span {
    font-family: "Poppins", sans-serif;
    display: none;
    color: black;
    font-weight: 700;
  }
`;
