import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

import SceneButton from "./SceneButton";

function Header() {
  return (
    <Wrapper className="header">
        <NavLink  to="/spline360">
                  <SceneButton title="360 tour" />
                </NavLink>
        <NavLink to="/">
                  <SceneButton title="Vir. tour" />
                </NavLink>
        
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 60px;
  top: 56px;
  right: 50px;
  z-index: 2;

  a {
    color: #000000;
    text-decoration: none;
  }

  // @media (max-width: 1400px) {
  //   display: none;
  // }
`;

