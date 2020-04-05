import React from 'react'
import { Link } from 'gatsby'
import Menu from '../Menu'
import logo from '../../assets/images/logo.jpg'

import './style.scss'

class Sidebar extends React.Component {
  render() {
    const {
      podcast,
      copyright,
    } = this.props.data.site.siteMetadata

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const podcastBlock = (
      <div>
        <Link to="/">
          <img
            src={logo}
            className="sidebar__podcast-photo"
            alt={podcast.name}
          />
        </Link>
        <p className="sidebar__podcast-description">{podcast.description}</p>
      </div>
    )
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__podcast">{podcastBlock}</div>
          <div>
            <Menu />
            <p className="sidebar__copyright">{copyright}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
