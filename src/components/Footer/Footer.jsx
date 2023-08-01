import React from "react";
import styled from "styled-components";
import linkedinLogo from "../public/logos/linkedin.png";
import githubLogo from "../public/logos/github.png";
import gmailLogo from "../public/logos/gmail.png";

const Footer = () => {
  return (
    <FooterContainer>

      <AboutMe>
        <a href={linkedInURL}>
          <Logo src={linkedinLogo} alt="LinkedIn" />
        </a>

        <a href={GitHubURL}>
            <Logo src={githubLogo} alt="GitHub" />
        </a>
      </AboutMe>

      <ContactMe>
        <a href={GmailURL}>
            <Logo src={gmailLogo} alt="Gmail" />
        </a>
      </ContactMe>

    </FooterContainer>
  );
};

// Styled components for styling the footer and logos
const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const AboutMe = styled.div`
  display: flex;
  align-items: center;
`;

const ContactMe = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export default Footer;
