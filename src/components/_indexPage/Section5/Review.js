import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled.div`
  background-size: cover;
  height: 20rem;
  background-position: center center;
  position: relative;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  width: 100%;
  & .content {
    background: red;
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Review1 = () => {
  return (
    <ImageBackground url="http://edmrealty-com.stackstaging.com/wp-content/uploads/2020/04/edmonton_review_1.png">
      <div className="content">
        <h3>FUck fuck FUck</h3>
      </div>
    </ImageBackground>
  );
};
