import React, { Component } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import Icon from "@material-ui/core/Icon"
import injectSheet from "react-jss"
import Tooltip from "@material-ui/core/Tooltip"

// import Header from './header'
import Footer from "./footer"
import "./layout.css"

const styles = {
  header: {
    display: "flex",
    margin: "0 auto",
    justifyContent: "space-between",
    maxWidth: "1200px",
    height: "60px",
  },
}

const { matchMedia } = typeof window !== "undefined" && window

class LayoutUnstyled extends Component {
  constructor() {
    super()
    this.state = {
      lightTheme: false,
      // lightTheme: !window.matchMedia("(prefers-color-scheme: dark)").matches,
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
        type: this.state.lightTheme ? "light" : "dark",
        primary: {
          light: "#757ce8",
          main: "#3f50b5",
          dark: "#002884",
          contrastText: "#fff",
        },
        secondary: {
          light: "#ff7961",
          main: "#f44336",
          dark: "#ba000d",
          contrastText: "#000",
        },
      },
    })
    let { lightTheme } = this.state
    let { classes } = this.props
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
                  name: "description",
                  content: "Sample",
                },
                {
                  name: "keywords",
                  content: "sample, something",
                },
              ]}
            >
              <html lang="en" />
            </Helmet>{" "}
            <MuiThemeProvider theme={theme}>
              <header className={classes.header}>
                <div
                  style={{
                    margin: "auto 0",
                    display: "flex",
                    justifyContent: "space-between",
                    width: 152,
                  }}
                >
                  <Tooltip title="Github">
                    <Icon
                      className="fab fa-github-alt"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        window.open("https://github.com/tuguScript/", "_blank")
                      }}
                      color="action"
                    />
                  </Tooltip>
                  <Tooltip title="Linkedin">
                    <Icon
                      className="fab fa-linkedin-in"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/in/tuguldurtech/",
                          "_blank"
                        )
                      }}
                      color="action"
                    />
                  </Tooltip>
                  <Tooltip title="E-mail">
                    <Icon
                      className="fas fa-envelope"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        window.open("mailto:tuguscript@gmail.com", "_blank")
                      }}
                      color="action"
                    />
                  </Tooltip>
                </div>
                <div style={{ margin: "auto 0" }}>
                  {this.state.lightTheme ? (
                    <Tooltip title="Light Mode">
                      <Icon
                        className="fas fa-sun"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.changeTheme()}
                        color="action"
                      />
                    </Tooltip>
                  ) : (
                    <Tooltip title="Dark mode">
                      <Icon
                        className="fas fa-moon"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.changeTheme()}
                        color="action"
                      />
                    </Tooltip>
                  )}
                </div>
              </header>
              <div>{this.props.children}</div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="rgb(30 19 87)"
                  fill-opacity="1"
                  d="M0,288L17.1,240C34.3,192,69,96,103,90.7C137.1,85,171,171,206,186.7C240,203,274,149,309,128C342.9,107,377,117,411,101.3C445.7,85,480,43,514,32C548.6,21,583,43,617,80C651.4,117,686,171,720,181.3C754.3,192,789,160,823,122.7C857.1,85,891,43,926,64C960,85,994,171,1029,197.3C1062.9,224,1097,192,1131,197.3C1165.7,203,1200,245,1234,250.7C1268.6,256,1303,224,1337,213.3C1371.4,203,1406,213,1423,218.7L1440,224L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
                ></path>
              </svg>
              <Footer />
            </MuiThemeProvider>
          </div>
        )}
      />
    )
  }
}

LayoutUnstyled.propTypes = {
  children: PropTypes.node.isRequired,
}

const Layout = injectSheet(styles)(LayoutUnstyled)

export default Layout
