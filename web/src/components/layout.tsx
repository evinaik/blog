import React from "react";
import { Header } from "./header";

import styled from "styled-components";
import { GlobalStyles } from "./global-styles";

const Main = styled.main`
  background: var(--color-white);
`;

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <GlobalStyles />
    <Header
    // siteTitle={siteTitle}
    // onHideNav={onHideNav}
    // onShowNav={onShowNav}
    // showNav={showNav}
    />
    <Main>{children}</Main>
    <footer>
      <div>
        <div>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
