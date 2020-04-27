import React from 'react';

import styled from '@emotion/styled';
import SearchForm from '../../algolia/SearchForm';

const Section = styled.div`
  margin: 1rem;
  @media (max-width: 400px) {
    margin: 1rem 0;
  }
`;

const Container = styled.div`
  & h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 0.7rem;
  }
  background: ${(props) => props.theme.colors.lightgrey};
  padding: 2rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    min-width: 30rem;
    @media (max-width: 600px) {
      max-width: 100%;
      min-width: 100%;
    }
  }
`;

export const SectionSearch = () => {
  return (
    <Section>
      <Container>
        <h2> Find your Next Home in Edmonton</h2>
        <SearchForm />
      </Container>
    </Section>
  );
};
