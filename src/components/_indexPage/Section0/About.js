import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import { NoStyleLink } from '../../resusableStyles/Links/LinkStyles';
import { realtorContact } from '../../../constants/realtordata';
import { ButtonExternal } from '../../resusableStyles/Buttons/Buttons';

const { calendly } = realtorContact;

const Container = styled.div`
  background: ${(props) => props.theme.colors.white};

  box-shadow: 5px 5px 25px rgba(118, 118, 118, 0.15);
  display: grid;
  grid-template-columns: 10fr 6fr;
  grid-gap: 1rem;
  max-width: 1500px;
  margin: 2rem auto;
  @media (max-width: ${(props) => props.theme.screenSize.eightHundred}) {
    grid-template-columns: 1fr;
    padding: 0;
    margin: 0;
    box-shadow: none;
  }
`;

const ContentContainer = styled.div`
  font-family: Montserrat;
  line-height: 30px;
  font-weight: 500;
  max-width: 600px;
  padding: 2rem;
  height: min-content;
  @media (max-width: 900px) {
    padding: 1rem;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
  & h1 {
  }
  & p {
    margin: 1.5rem 0;
    font-size: 1.2rem;
    opacity: 0.8;
  }
`;

const ImageContainer = styled.div`
  object-fit: cover;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 28% 100%);
  @media (max-width: 600px) {
    clip-path: unset;
    height: 20rem;
  }
`;

const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  over-flow: hidden;
  object-fit: cover;
  border-radius: 1rem;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const About = ({ fluid }) => {
  return (
    <Container>
      <ContentContainer>
        <h1> Hello I'm Austin Dundiel!</h1>
        <p>
          I am one of the top Realtors in Edmonton and matching you with your
          desired dream home is my passion!
        </p>
        <p>
          I want to be there supporting you every step of the way so the your
          life's biggest investment is also your greatest experience
        </p>
        <p>
          If you are ready to start your home buying journey I'm excited and
          ready to make it happen
        </p>

        <ButtonExternal
          className="calendly"
          rel="noreferral nofollow"
          href={calendly}
          style={{ marginRight: '4px' }}
        >
          Let's Chat
        </ButtonExternal>
      </ContentContainer>
      <ImageContainer>
        <HeroImage fluid={fluid} />
      </ImageContainer>
    </Container>
  );
};
