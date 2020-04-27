// Search.js

import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { FaSearchengin } from 'react-icons/fa';
import styled from '@emotion/styled';

import {
  InstantSearch,
  SearchBox,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom';

import PropertySearchPreview from './PropertySearchPreview';

const ResultsContainer = styled.div`
  & p {
    color: red;
    position: absolute;
    bottom: 100%;
    right: 0;
  }
`;

const Results = connectStateResults(({ searchState }) =>
  searchState && searchState.query ? (
    <ResultsContainer>
      <StyledHits hitComponent={PropertySearchPreview} />
    </ResultsContainer>
  ) : //<div>No query</div>
  null,
);

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

const StyledSearchBox = styled(SearchBox)`
  .ais-SearchBox-form {
    display: flex;
    @media (min-width: ${(props) => props.theme.screenSize.mobileL}) {
      max-width: 50rem;
      margin: 0 auto;
    }
  }
  .ais-SearchBox-submit {
    background: white;
  }

  & input,
  button {
    border: none;
    padding: 0;
    outline: none;
  }
  .ais-SearchBox-reset {
    display: none;
  }
  & input {
    width: 100%;
    padding: 1rem;
  }
  & button {
    padding: 4px;
  }
  .searchicon {
    font-size: 23px;
    color: ${(props) => props.theme.colors.primaryLight};
    cursor: pointer;
  }
`;

const StyledHits = styled(Hits)`
  position: relative;
  z-index: 101;
  .ais-Hits-list {
    max-height: 50vh;
    overflow-y: scroll;
  }
  & ul {
    list-style: none;
    width: 100%;
    background: ${(props) => props.theme.colors.white};
    -webkit-box-shadow: 16px 19px 14px -7px rgba(207, 205, 207, 0.93);
    -moz-box-shadow: 16px 19px 14px -7px rgba(207, 205, 207, 0.93);
    box-shadow: 16px 19px 14px -7px rgba(207, 205, 207, 0.93);
    position: absolute;
    margin-right: 32px;
    padding: 0;
    top: 0;
    left: 0;
    @media (max-width: ${(props) => props.theme.screenSize.mobileL}) {
      box-shadow: none;
      border-bottom: 5px solid ${(props) => props.theme.colors.primary};
    }
  }
  & li {
    text-align: center;
    padding: 0 1rem;
    @media (max-width: ${(props) => props.theme.screenSize.mobileL}) {
      padding: 0;
    }
    &:hover {
      background: ${(props) => props.theme.colors.lightgrey};
    }
  }
  @media (max-width: ${(props) => props.theme.screenSize.mobileL}) {
    & ul {
      border-top: 1px solid ${(props) => props.theme.colors.black};
      width: 100%;
      top: 0;
      padding: 0;
      margin: 0;
    }
  }
`;

export default function SearchForm() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('I was submitted');
  };
  return (
    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <StyledSearchBox
        onSubmit={onSubmitHandler}
        submit={<FaSearchengin className="searchicon" />}
        translations={{
          submitTitle: 'Submit search query.',
          resetTitle: 'Clear search query.',
          placeholder: '2 bedroom 1 bedroom apartment...',
        }}
      />

      <Results />
    </InstantSearch>
  );
}
