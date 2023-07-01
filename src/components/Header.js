import styled from "styled-components";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src="/assets/images/logo.svg" alt="" />
      </Logo>

      <NavMenu>
        <a href="/home">
            <img src="/assets/images/home-icon.svg" alt="HOME" />
        </a>
        <span>HOME</span>
        </NavMenu>
    </Nav>
  );
};

// NavBar style
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-conent: space-between;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

// Logo Style
const Logo = styled.a`
  paddding: 0;
  width: 80px;
  margin-top: 4px;
  max-heigth: 70px;
`;

// NavBar Content and  Media Query for mobile
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
     display: flex;
     align-item: center;
     padding: 0 12px;

     img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
     }

     span {
            color: grey;
            fontt-size: 13px;
            
     }
   }

    @media (max-width: 768px) {
        display: none;
    }
`;

export default Header;
