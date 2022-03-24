import styled, { keyframes } from "styled-components";

export const MarqueeWrapper = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
  > .wrapper {
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const MarqueeText = styled.p`
  display: inline-block;

  font-size: 160px;
`;
