import React from 'react';

import { About } from './About';
import styled from '@emotion/styled';

const Section = styled.div`
  margin: 1rem;
`;

export const Section0 = ({ fluid }) => {
  return (
    <Section>
      <About fluid={fluid} />
    </Section>
  );
};
