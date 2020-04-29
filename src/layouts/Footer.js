import React from 'react';
import styled from '@emotion/styled';
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
} from 'react-icons/fa';
import { realtorContact, realtorSocial } from '../constants/realtordata';

const { phone, phonedisplay, email } = realtorContact;
const { twitter, instagram, facebook } = realtorSocial;

const Section = styled.div``;

const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  & a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }
  background: ${(props) => props.theme.colors.secondary};
`;

const ContainerTop = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  & .namesection {
    display: flex;
    justify-content: center;

    min-width: 250px;
    max-width: 320px;
    flex: 1;

    padding: 2rem;
    background: ${(props) => props.theme.colors.primary};

    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 500px) {
      max-width: 100%;
    }

    & p {
      font-size: 13px;
    }
  }
  & .linksection {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background: ${(props) => props.theme.colors.secondary};
  }
  & .contactsection {
    margin: 0 1rem;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;

    flex-wrap: wrap;
  }
  & .phone {
    margin-right: 1rem;
  }
  & .socialsection {
    margin: 0 1rem;
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    & a {
      transform: translateY(5px);
      font-size: 2rem;
      padding: 0;
      margin: 0;
      margin-right: 4px;
    }
    @media (max-width: 900px) {
      justify-content: center;
    }
  }
`;

const ContainerBottom = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.lightgrey};
  padding: 1rem;
  & p {
    text-align: center;
    font-size: 14px;
    color: ${(props) => props.theme.colors.black};
  }
`;

export const Footer = () => {
  return (
    <Section>
      <Container>
        <ContainerTop>
          <div className="namesection">
            <h4>Austin Dundeil</h4>
            <p>Realtor Ulimate Real Estate</p>
          </div>
          <div className="linksection">
            <div className="contactsection">
              <a className="phone" href={`tel:+1${phone}`}>
                {phonedisplay}
              </a>
              <a className="email" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
            <div className="socialsection">
              <a
                target="_blank"
                rel="noreferral nofollow noopener"
                href={twitter}
              >
                <FaTwitterSquare className="icons" />
              </a>
              <a
                target="_blank"
                rel="noreferral nofollow noopener"
                href={facebook}
              >
                <FaFacebookSquare className="icons" />
              </a>

              <a
                target="_blank"
                rel="noreferral nofollow noopener"
                href={instagram}
              >
                <FaInstagramSquare className="icons" />
              </a>
            </div>
          </div>
        </ContainerTop>
        <ContainerBottom>
          <p>
            Data is deemed reliable but not guaranteed to be accurate Please
            contact for more info.
          </p>
          <p>Codepaper 2020</p>
        </ContainerBottom>
      </Container>
    </Section>
  );
};
