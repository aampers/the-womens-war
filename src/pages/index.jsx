import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Episode from '../components/Episode'
import Sidebar from '../components/Sidebar'

class IndexRoute extends React.Component {
  render() {
    const items = []
    const { title, podcast } = this.props.data.site.siteMetadata
    const episodes = []
    episodes.forEach(episode => {
      items.push(<Episode data={episode} key={episode.node.fields.slug} />)
    })

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
          <Sidebar {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

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
  }
`
