import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'

// import Header from './header'
import Footer from './footer'
import './layout.css'

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      lightTheme: false,
    }
    this.changeTheme = this.changeTheme.bind(this)
  }
  changeTheme() {
    this.setState(state => ({
      lightTheme: !state.lightTheme,
    }))
  }
  render() {
    const theme = createMuiTheme({
      palette: {
        type: this.state.lightTheme ? 'light' : 'dark',
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
    })
    let { lightTheme } = this.state
    return (
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
          <div style={{ backgroundColor: lightTheme ? null : `#212121` }}>
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
              <header
                style={{
                  marginBottom: '1.45rem',
                }}
              >
                <div>
                  <Icon
                    className="fab fa-github-alt"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      window.open('https://github.com/tuguScript/', '_blank')
                    }}
                    color="action"
                  />
                  <Icon
                    className="fab fa-linkedin-in"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      window.open(
                        'https://www.linkedin.com/in/tuguldurtech/',
                        '_blank'
                      )
                    }}
                    color="action"
                  />
                  <Icon
                    className="fab fa-twitter"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      window.open('https://twitter.com/tuguldur_01', '_blank')
                    }}
                    color="action"
                  />
                  <Icon
                    className="fas fa-envelope"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      window.open('mailto:tuguscript@gmail.com', '_blank')
                    }}
                    color="action"
                  />
                  {this.state.lightTheme ? (
                    <Icon
                      className="fas fa-sun"
                      style={{ cursor: 'pointer' }}
                      onClick={() => this.changeTheme()}
                      color="action"
                    />
                  ) : (
                    <Icon
                      className="fas fa-moon"
                      style={{ cursor: 'pointer' }}
                      onClick={() => this.changeTheme()}
                      color="action"
                    />
                  )}

                  {/* <i class="fas fa-envelope"></i> */}
                </div>
              </header>
              <div>{this.props.children}</div>
              <Footer />
            </MuiThemeProvider>
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
