import React from 'react';
import styled from '@emotion/styled';
import { ReviewSlider } from './ReviewSlider';

const Section = styled.div`
  margin: 3rem 0;
`;

export const Section5 = ({ reviews }) => {
  return (
    <Section>
      <ReviewSlider reviews={reviews} />
    </Section>
  );
};
