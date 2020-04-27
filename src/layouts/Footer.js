import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 2rem 1rem;
  background: ${(props) => props.theme.colors.lightgrey};

  display: flex;
  justify-content: center;
`;

export const Footer = () => {
  return <Container>This is the site Footer</Container>;
};
