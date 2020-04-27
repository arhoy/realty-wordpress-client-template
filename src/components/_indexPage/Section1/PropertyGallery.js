import React from 'react';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';

import { NoStyleLink } from '../../resusableStyles/Links/LinkStyles';
import { formatPrice } from '../../../utils/propertyHelpers';

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  & .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.colors.primary};
    @media (max-width: 400px) {
      display: none;
    }
  }
  & .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.colors.primary};
  }
`;

const Property = styled(NoStyleLink)`
  margin: 3rem 0;
  text-align: center;
  & img {
    width: 20rem;
    height: 15rem;
  }
`;

export const PropertyGallery = ({ properties }) => {
  const params = {
    lazy: true,

    spaceBetween: 30,
    slidesPerView: 4,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  };

  return (
    <Container>
      <Swiper {...params}>
        {properties.slice(0, 5).map((property, i) => (
          <Property key={i} to={`/properties/${property.acf.slug}`}>
            <img
              className="swiper-lazy"
              src={property.acf.mainimage}
              alt={property.acf.title}
            />
            <h4>
              {formatPrice(property.acf.listedprice, property.acf.currency)}
            </h4>
          </Property>
        ))}
      </Swiper>
    </Container>
  );
};
