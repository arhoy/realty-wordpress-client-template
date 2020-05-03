import React from 'react';
import styled from '@emotion/styled';
import { NoStyleLink } from '../resusableStyles/Links/LinkStyles';
import { formatPrice } from '../../utils/propertyHelpers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 0;
  list-style: none;
  & .algolia {
    opacity: 0.3;
    font-size: 12px;
    &:hover {
      background: transparent;
    }
  }
`;

const CustomLink = styled(NoStyleLink)`
  display: flex;
  justify-content: space-between;
  & .search-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & .price {
      font-weight: 700;
    }
  }

  & h4 {
    font-weight: 400;
  }
`;

const PropertySearchPreview = ({ hit }) => {
  console.log('hit', hit.acf);
  const MAX_RETURN = 9;

  if (hit && hit.__position <= MAX_RETURN) {
    return (
      <Container>
        {hit.__position === MAX_RETURN ? (
          <h4 className="algolia">{'Powered By Algolia'}</h4>
        ) : (
          <CustomLink to={`/properties/${hit.acf.slug}`}>
            <div className="search-content">
              <h4>{hit.acf.title}</h4>
              <h4 className="price">
                {formatPrice(hit.acf.listedprice, hit.acf.currency)}
              </h4>
            </div>

            <img
              style={{ width: '200px', height: '150px', objectFit: 'cover' }}
              src={hit.acf.mainimage}
            />
          </CustomLink>
        )}
      </Container>
    );
  } else {
    return null;
  }
};

export default PropertySearchPreview;
