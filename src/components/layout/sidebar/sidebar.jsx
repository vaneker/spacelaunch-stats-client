import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { Mutation } from 'react-apollo';
import { TOGGLE_THEME } from '../../../queries';
// import ThemeSelect from './theme-select';

export default function Sidebar() {
  // const { handleThemeChange } = props;
  return (
    <Background>
      Sidebar
      <Link to="/">
        <StyledLinks>Home</StyledLinks>
      </Link>
      <Link to="capsules">
        <h1>Capsules</h1>
      </Link>
      <Link to="launchpads">
        <h1>Launchpads</h1>
      </Link>
      <Mutation mutation={TOGGLE_THEME}>
        {toggleTheme => <button onClick={toggleTheme}>dd</button>}
      </Mutation>
      {/* <ThemeSelect handleThemeChange={handleThemeChange} /> */}
    </Background>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Background = styled.aside`
  height: 100%;
  width: 20vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.sidebar};
  overflow-x: hidden;
  padding-top: 20px;
`;

const StyledLinks = styled.h1`
  padding: 6px 8px 6px 16px;
  color: ${props => props.theme.text};
  display: block;
  &:hover {
    color: #f1f1f1;
  }
`;
