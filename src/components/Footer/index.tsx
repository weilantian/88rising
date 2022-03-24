import styled from "styled-components";
import { EmailLink, FooterWrapper } from "./index.style";

/*
Footer component
*/

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="top">
        <h1 className="brand">88Rising</h1>
        <p className="subheading">Website designed by Lantian Wei</p>
        <div className="acknowledgements">
          <p>
            *This website is made for non-commercial use and educational purpose
            only. <br />
            *All playable assets are taken from 88rising official youtube
            channel.
          </p>
          <p>
            Contact email:{" "}
            <EmailLink href="mailto:s3882916@student.rmit.edu.au">
              s3882916@student.rmit.edu.au
            </EmailLink>
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
