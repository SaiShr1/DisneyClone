import React from "react";
import styled from "styled-components";

const Footer = () => {
  

  return (
    <FooterContainer>
      <AboutMe>
        <h6>About Me:</h6>
        <div>
        <a
          href="https://www.linkedin.com/in/he-coder-omsai-nagvekar-886734205/"
          target="_blank"
        >
          <Logo src="/assets/icons/linkedin-icon.svg" alt="LinkedIn" />
        </a>

        <a href="https://github.com/SaiShr1" target="_blank">
          <Logo src="/assets/icons/github-icon.svg" alt="GitHub" />
        </a>
        </div>
      </AboutMe>

      <ContactMe>
        <h5>Contact: omsaix100@gmail.com</h5>
      </ContactMe>
    </FooterContainer>
  );
};

// Styled components for styling the footer and logos
const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  height: 72px;
  background-color: #090b13;
  align-items: center;
  padding: 0 36px;
  // letter-spacing: 16px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

const AboutMe = styled.div`
  display: grid;
  align-items: center;
`;

const ContactMe = styled.div`
  display: grid;
  align-items: center;
`;

const Logo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export default Footer;
