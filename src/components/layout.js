import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Header from './header'
import Footer from './footer'
import './layout.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
})

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
            {
              name: 'description',
              content: 'Sample',
            },
            {
              name: 'keywords',
              content: 'sample, something',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>{' '}
        <MuiThemeProvider theme={theme}>
          <Header />
          <div>{children}</div>
          <Footer />
        </MuiThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
