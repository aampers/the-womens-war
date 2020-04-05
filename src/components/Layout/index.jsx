import React from 'react'
import '../../assets/scss/init.scss'
import SEO from '../SEO'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <SEO />
        <div id="banner" />
        {children}
      </div>
    )
  }
}

export default Layout
