import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { ButtonExternal } from '../../resusableStyles/Buttons/Buttons';

import { realtorContact } from '../../../constants/realtordata';

const { phone, phonedisplay, calendly } = realtorContact;

const Container = styled.div`
  background: ${(props) => props.theme.colors.white};

  box-shadow: 5px 5px 25px rgba(118, 118, 118, 0.15);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  max-width: 1500px;
  margin: 2rem auto;
  @media (max-width: ${(props) => props.theme.screenSize.eightHundred}) {
    display: flex;
    flex-direction: column-reverse;

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
  @media (max-width: 900px) {
    padding: 1rem;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
  & h2 {
  }
  & p {
    margin: 1.5rem 0;
    font-size: 1.2rem;
    opacity: 0.8;
  }
  & button {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    border: none;
    outline: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const ImageContainer = styled.div`
  height: 30rem;
  object-fit: cover;
  clip-path: polygon(20% 1%, 100% 0, 100% 100%, 0% 100%);
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
        <h2>Looking to Relocate</h2>
        <p> You’re thinking about buying your first home. Exciting time!</p>
        <p>
          Interested in knowing if now is the right market? As a realtor I want
          to help you find the right location for you and your family. Don't
          rush into things, I am here to explore and provide all the options
          that you have
        </p>
        <p>I'm ready to help you fullfill your location needs</p>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <ButtonExternal
            className="calendly"
            rel="noreferral nofollow"
            href={calendly}
            style={{ marginRight: '4px' }}
          >
            Schedule Call
          </ButtonExternal>
          <ButtonExternal className="phone" href={`tel:+1${phone}`}>
            Call: {phonedisplay}
          </ButtonExternal>
        </div>
      </ContentContainer>
      <ImageContainer>
        <HeroImage fluid={fluid} />
      </ImageContainer>
    </Container>
  );
};
