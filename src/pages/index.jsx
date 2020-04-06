import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Episode from '../components/Episode';
import Sidebar from '../components/Sidebar';

const IndexRoute = (props) => {
  const items = [];
  const { podcast, title } = props.data.site.siteMetadata;
  const { nodes } = props.data.allMarkdownRemark;
  let episodes = nodes.slice(0);
  episodes.sort((episodeA, episodeB) => episodeB.frontmatter.number - episodeA.frontmatter.number);
  episodes.forEach((episode, i) => {
    items.push(<Episode data={episode} key={i} />);
  });

  return (
    <Layout>
      <div className="content-grid">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={podcast.description} />
        </Helmet>
        <div className="content">
          <div className="content__inner">{items}</div>
        </div>
        <Sidebar {...props} />
      </div>
    </Layout>
  );
};

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        copyright
        podcast {
          name
          description
        }
      }
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          number
          title
          description
          epub
          pdf
          link
        }
      }
    }
  }
`;
