import styled from "styled-components";

export const LearnMoreButtonWrapper = styled.a`
  text-decoration: none;
  color: #fff;
  margin-top: 80px;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 38px;
  text-transform: uppercase;
  width: 320px;
  text-align: center;
  font-weight: 700;
  transition: transform 0.6s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    &::after {
      width: 100%;
    }
    transform: scale(0.8);
  }
  &::after {
    transition: width 0.4s ease-in-out;
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    background-color: white;
    width: 0px;
    height: 8px;
  }
`;
