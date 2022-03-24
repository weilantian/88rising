import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  background-color: black;
  font-family: "Poppins", sans-serif;
  padding: 80px 64px;
  > .top {
    > .brand {
      font-size: 72px;
    }
    > .subheading {
      margin-top: 14px;
      font-size: 18px;
      font-weight: 500;
      opacity: 0.8;
    }
    > .acknowledgements {
      margin-top: 32px;
      opacity: 0.6;
    }
  }
`;

export const EmailLink = styled.a`
  color: white;
`;
