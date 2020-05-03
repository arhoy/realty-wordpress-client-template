const algoliaQuery = `

{
    allWordpressPage {
      nodes {
        id
        slug
        acf {
          slug
          title
          slug
          floorsizeunit
          floorsizevalue
          numbedroom
          numbathroom
          description
          mlsnumber
          address
          city
          listedprice
          mainimage
        }
      }
    }
  }
  
`;

const queries = [
  {
    query: algoliaQuery,
    transformer: ({ data }) => data.allWordpressPage.nodes,
  },
];

module.exports = queries;
