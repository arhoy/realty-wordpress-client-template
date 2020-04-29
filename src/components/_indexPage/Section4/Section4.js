import React from 'react';

import { About } from './Card';
import styled from '@emotion/styled';

const Section = styled.div`
  margin: 6rem 1rem;
`;

export const Section4 = ({ fluid }) => {
  return (
    <Section>
      <About fluid={fluid} />
    </Section>
  );
};
