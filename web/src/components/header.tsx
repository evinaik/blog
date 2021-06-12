import * as React from "react";
import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";
import { useTypewriter } from "../hooks/useTypewriter";

const Wrapper = styled.div`
  position: relative;
  z-index: 100;
`;

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.5em;
`;

const Name = styled.h1`
  color: #555;
  flex: 1;
  font-size: 1.5em;
  font-weight: 500;
`;

const Nav = styled.nav`
  text-align: center;
`;

const NavList = styled.ul`
  color: #555;
  display: flex;
  font-size: 1.2em;
  list-style: none;
  justify-content: space-around;
  padding: 0;
`;

const NavListItem = styled.li`
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 1em;
  }
`;

const NavALink = styled.a`
  text-decoration: none;

  &,
  &:visited:not(:hover) {
    color: inherit;
  }

  &:hover {
    color: var(--color-accent);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;

  &,
  &:visited {
    color: inherit;
  }

  &:hover {
    color: var(--color-accent);
  }
`;

const blink = keyframes`
  from, to {
    color: transparent;
  }
  50% {
    color: inherit;
  }
`;

const BlinkingCursor = styled.span`
  animation: ${blink} 1s ease infinite;
`;

export function Header() {
  const name = useTypewriter("Ekansh Vinaik");
  return (
    <Wrapper>
      <StyledHeader>
        <Name>
          <NavLink to="/">
            {name}
            <BlinkingCursor>|</BlinkingCursor>
          </NavLink>
        </Name>
        <Nav>
          <NavList>
            <NavListItem>
              <NavLink to="/">Home</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/blog">Blog</NavLink>
            </NavListItem>
            <NavListItem>
              <NavALink href="https://docs.google.com/viewer?url=https://github.com/evinaik/resume/raw/master/resume.pdf">
                Resume
              </NavALink>
            </NavListItem>
          </NavList>
        </Nav>
      </StyledHeader>
    </Wrapper>
  );
}
