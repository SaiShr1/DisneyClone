import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogo src="/assets/images/cta-logo-one.svg" alt="" />
          <SignUp>Get All Here</SignUp>
          <Description>
            Disney+ Hotstar is an online video streaming platform owned by Novi
            Digital Entertainment Private Limited, a wholly owned subsidiary of
            Star India Private Limited.
          </Description>
          <CTALogo src="/assets/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 86px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-image: url("/assets/images/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  // z-index will keep the the image behind all the stuff giving it the lowest priority
  z-index: -1;
`;

// Call To Action
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;

const CTALogo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
`;

// SignUp Button
const SignUp = styled.a`
  font-weight: bold
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 2.5px;
  font-size: 20px;
  font-weight: bolder;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

   &:hover {
        background-color: #0483ee;
        cursor: pointer;
        color: white;
    }
`;

// Description
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

export default Login;
