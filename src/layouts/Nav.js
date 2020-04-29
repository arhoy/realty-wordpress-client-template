import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { NoStyleLink } from '../components/resusableStyles/Links/LinkStyles';

const Container = styled.div`
  background: ${(props) => props.theme.colors.lightgrey};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-right: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0 0.5rem;
`;

export const Nav = () => {
  return (
    <Container>
      <NoStyleLink to="/">
        <Logo>Austin Dundiel</Logo>
      </NoStyleLink>

      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/properties">Properties</NavLink>
      </Links>
    </Container>
  );
};
