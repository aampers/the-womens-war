import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';

class NotFoundRoute extends React.Component {
  render() {
    return (
      <Layout>
        <div className="content-grid">
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">THERE&#39;S NOTHING HERE</h1>
                <div className="page__body">
                  <p>Where do you think you&#39;re going? I&#39;m hip to your tomfoolery.</p>
                </div>
              </div>
            </div>
          </div>
          <Sidebar {...this.props} />
        </div>
      </Layout>
    );
  }
}

export default NotFoundRoute;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        copyright
        podcast {
          name
        }
      }
    }
  }
`;
