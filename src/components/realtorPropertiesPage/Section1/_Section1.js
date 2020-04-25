import React from 'react';
import styled from '@emotion/styled';
import { Properties } from './Properties';

const Section = styled.div`
  margin: 1rem;
`;

export const Section1 = ({ properties }) => {
  return (
    <Section>
      <Properties properties={properties} />;
    </Section>
  );
};
