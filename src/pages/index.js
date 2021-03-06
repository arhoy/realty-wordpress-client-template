import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/Layout';
import SEO from '../hooks/SEO';
import { Section0 } from '../components/_indexPage/Section0/Section0';
import { SectionSearch } from '../components/_indexPage/SectionSearch/_SectionSearch';
import { Section1 } from '../components/_indexPage/Section1/_Section1';
import { Section3 } from '../components/_indexPage/Section3/Section3';
import { Section4 } from '../components/_indexPage/Section4/Section4';
import { Section5 } from '../components/_indexPage/Section5/_Section5';
export const query = graphql`
  {
    seo: file(relativePath: { eq: "seo/contact.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          src
        }
      }
    }

    hero: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    card1: file(relativePath: { eq: "index/card1.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    card2: file(relativePath: { eq: "index/card2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    properties: allWordpressPage {
      nodes {
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
    reviews: allWordpressPost {
      nodes {
        acf {
          title
          description
          name_of_reviewer
          backgroundimage {
            source_url
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="My Emotion JS Barebones Starter Tempalte"
        description="This is a starter template that uses the barebones popular default starter with the addition of Emotion JS, Google Fonts, Google Analytics with an example SEO Hooks and starter Layout.js file"
      />
      <SectionSearch />
      {/* card hero section */}
      <Section0 fluid={data.hero.childImageSharp.fluid} />
      {/* featured listings */}
      <Section1 properties={data.properties.nodes} />

      <Section3 fluid={data.card1.childImageSharp.fluid} />
      <Section4 fluid={data.card2.childImageSharp.fluid} />
      <Section5 reviews={data.reviews.nodes} />
    </Layout>
  );
};

export default IndexPage;
