import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../stylesheets/main.scss'
import favicon from '../images/favicon.ico'
import { version } from '../../package.json'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Travis Lin, all web tech thinking.' }
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/x-icon', href: `${favicon}`}
          ]}
        >
          <html lang="en" data-appver={version} />
        </Helmet>
        <div className="outline">
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
