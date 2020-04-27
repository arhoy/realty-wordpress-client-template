import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../layouts/Layout';
import { Button } from '../components/resusableStyles/Buttons/Buttons';

const IMAGE_HEIGHT = '30rem';

const Section = styled.div`
  margin: 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  & h1 {
    font-size: 1.4rem;
  }
  & .price {
    font-size: 1.8rem;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  & img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  & .mainimage {
    max-width: 35rem;
    height: ${IMAGE_HEIGHT};
    object-fit: cover;
    border-radius: 8px;
    @media (max-width: 1200px) {
      max-width: 100%;
    }
  }
  & .imagegroup {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr;
      & img {
        width: 100%;
        object-fit: cover;
        height: 20rem;
      }
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      & img {
        width: 100%;
        object-fit: cover;
        height: 20rem;
      }
    }
  }
`;

const PropertyInfoContainer = styled.div`
  margin: 1rem 0;
  display: grid;

  grid-template-columns: 1fr 1fr;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
  & .description {
    max-width: 35rem;
    margin: 1rem 0;
    color: ${(props) => props.theme.colors.darkgrey};
    line-height: 29px;
    font-family: Montserrat;
  }
  & .overview {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    & li {
      display: flex;
      justify-content: space-between;
      padding: 4px 8px;
      &.grey {
        background: ${(props) => props.theme.colors.lightgrey};
      }
    }
  }
  & .contact {
    margin-top: 1rem;
    }
  }
`;

const FeaturesContainer = styled.div``;

export const query = graphql`
  query getPage($id: String!) {
    property: wordpressPage(id: { eq: $id }) {
      acf {
        title
        slug
        floorsizeunit
        floorsizevalue
        numbedroom
        numbathroom
        address
        city
        postalcode
        description
        listedprice
        currency
        mainimage
        imageURLsArray
        mlsnumber
        parking
        broker_agent
        broker_phone
        broker_company
        features
      }
    }
    getSiteData: site {
      siteMetadata {
        url
      }
    }
  }
`;

const PropertyPage = (props) => {
  const property = props.data.property.acf;

  // clean image and get first 5
  const imageArray = property.imageURLsArray.slice(1, -1).split(',', 5);

  // get the first image
  const imageMain = imageArray[0].slice(1, -1);

  // get the last 4 images
  const imageArray4 = imageArray.slice(1);

  // format price
  const price = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: property.currency,
  })
    .format(property.listedprice)
    .slice(0, -3);

  // format phone
  const phone = `${property.broker_phone.slice(
    0,
    3,
  )}-${property.broker_phone.slice(3, 6)}-${property.broker_phone.slice(6)}`;

  // format features
  const featuresArray = JSON.parse(property.features);
  return (
    <Layout>
      <Section>
        <Container>
          <HeaderContainer>
            <h1>{property.title}</h1>
            <div className="price">
              <h4> {price} </h4>
            </div>
            <div className="row">
              <span>{property.city}</span> <span> {property.postalcode} </span>
            </div>
          </HeaderContainer>
          <ImageContainer>
            <img className="mainimage" src={imageMain} />
            <div className="imagegroup">
              {imageArray4.map((image, i) => (
                <img
                  key={i}
                  src={image.slice(1, -1)}
                  alt={`${property.title}-image-${i + 1}`}
                />
              ))}
            </div>
          </ImageContainer>

          <PropertyInfoContainer>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: property.description }}
            />
            <div className="overview">
              <ul>
                <li className="grey">
                  MLS {` `} <span>{property.mlsnumber}</span>
                </li>
                <li>
                  Bedroom {` `} <span>{property.numbedroom} bd </span>
                </li>
                <li className="grey">
                  Bathroom {` `} <span>{property.numbathroom} ba</span>
                </li>
                <li>
                  Size {` `}
                  <span>
                    {property.floorsizevalue} {property.floorsizeunit}
                  </span>
                </li>
                <li className="grey">
                  Parking:{` `}
                  <span>{property.parking}</span>
                </li>
                <li>
                  Agent:{` `}
                  <span>{property.broker_agent}</span>
                </li>
                <li className="grey">
                  Phone:{` `}
                  <span>{phone}</span>
                </li>
                <li>
                  Company:{` `}
                  <span>{property.broker_company}</span>
                </li>
                <li className="grey">
                  Address: {` `}
                  <span>
                    {property.address} {property.city}
                  </span>
                </li>
              </ul>
              <div className="contact">
                <a className="phone" href={`tel:+1${phone}`}>
                  <Button>Contact Realtor</Button>
                </a>
              </div>
            </div>
          </PropertyInfoContainer>

          {/* <FeaturesContainer>
            {featuresArray.map((feature) => (
              <div>
                {feature.key}
                {feature.value.map((val) => (
                  <div>{val}</div>
                ))}
              </div>
            ))}
          </FeaturesContainer> */}
        </Container>
      </Section>
    </Layout>
  );
};
export default PropertyPage;
