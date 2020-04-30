import React from 'react';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';

const Container = styled.div`
  display: block;
  max-width: 1500px;

  background: ${(props) => props.theme.colors.white};

  box-shadow: 5px 5px 25px rgba(118, 118, 118, 0.15);
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
  & .swiper-slide {
    height: 40rem;
  }
`;

const Review = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;

  & img {
    position: relative;
    text-align: center;
    height: 33rem;
    max-width: 100%;
    min-width: 1000px;
    border-radius: 1rem;

    object-fit: cover;
    position: relative;
    @media (max-width: 1000px) {
      width: 100%;
      min-width: 300px;
    }
    @media (max-width: 600px) {
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      margin: 0;
      border-radius: 0;
      min-width: none;
    }
  }
  & .content {
    padding: 2rem;
    @media (max-width: 1200px) {
      width: 80%;
      margin: 0 auto;
    }
    @media (max-width: 600px) {
      width: 90%;
      margin: 0 auto;
      padding: 0;
    }
    & .reviewer_name {
      margin-top: 0.5rem;
      &::before {
        content: '-';
      }
    }
    & h4 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    position: absolute;
    color: white;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ReviewSlider = ({ reviews }) => {
  const params = {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // breakpoints: {
    //   1024: {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //   },
    //   768: {
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //   },
    //   640: {
    //     slidesPerView: 1,
    //     spaceBetween: 20,
    //   },
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 5,
    //   },
    //   100: {
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //   },
    // },
  };

  return (
    <Container>
      <Swiper {...params}>
        {reviews.map((review, i) => (
          <Review key={i}>
            <img
              className="swiper-lazy"
              src={review.acf.backgroundimage.source_url}
              alt={review.acf.title}
            />
            <div className="content">
              <h4> {review.acf.title} </h4>
              <p dangerouslySetInnerHTML={{ __html: review.acf.description }} />
              <p className="reviewer_name"> {review.acf.name_of_reviewer} </p>
            </div>
          </Review>
        ))}
      </Swiper>
    </Container>
  );
};
