import React from 'react';

import { About } from './Card';
import styled from '@emotion/styled';

const Section = styled.div`
  margin: 3rem 1rem;
  margin-bottom: 6rem;
`;

export const Section3 = ({ fluid }) => {
  return (
    <Section>
      <About fluid={fluid} />
    </Section>
  );
};
