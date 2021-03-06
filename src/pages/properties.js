import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import SEO from '../hooks/SEO';
import { Section1 } from '../components/realtorPropertiesPage/Section1/_Section1';
import { SectionSearch } from '../components/_indexPage/SectionSearch/_SectionSearch';

export const query = graphql`
  {
    allWordpressPage {
      nodes {
        id
        acf {
          title
          slug
          floorsizeunit
          floorsizevalue
          numbedroom
          numbathroom
          address
          listedprice
          mainimage
          currency
        }
      }
    }
  }
`;

const RealtorPropertiesPage = ({ data }) => {
  const properties = data.allWordpressPage.nodes;
  return (
    <Layout>
      <SEO
        title="Realtor Properties"
        description="Realtor properties for our site"
      />
      <SectionSearch />
      <Section1 properties={properties} />
    </Layout>
  );
};

export default RealtorPropertiesPage;
