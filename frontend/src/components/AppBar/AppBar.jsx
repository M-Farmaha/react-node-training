import {
  NavLinkStyled,
  NavList,
  NavWrap,
  Header,
} from "./AppBar-styled";

export const AppBar = () => {
  return (
    <>
      <Header>
        <NavWrap>
          <NavList>
            <li>
              <NavLinkStyled to="/login">Log In</NavLinkStyled>
            </li>

            <li>
              <NavLinkStyled to="/register">Sign Up</NavLinkStyled>
            </li>
          </NavList>
        </NavWrap>
      </Header>
    </>
  );
};
