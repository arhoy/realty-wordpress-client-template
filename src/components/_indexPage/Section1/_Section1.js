import React from 'react';
import styled from '@emotion/styled';
import { PropertyGallery } from './PropertyGallery';
import { Button } from '../../resusableStyles/Buttons/Buttons';
import { NoStyleLink } from '../../resusableStyles/Links/LinkStyles';

const Section = styled.div`
  margin: 0 1rem;
  padding: 4rem 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 0.7rem;
  }
`;

export const Section1 = ({ properties }) => {
  return (
    <Section>
      <TitleContainer>
        <h2>View My Featured Listings</h2>
        <NoStyleLink to="/properties">
          <Button>View All</Button>
        </NoStyleLink>
      </TitleContainer>

      <PropertyGallery properties={properties} />
    </Section>
  );
};
