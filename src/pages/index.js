import React, { Component } from 'react'
import { Link } from 'gatsby'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import { AccessAlarm } from '@material-ui/icons'
import Icon from '@material-ui/core/Icon'
import { loadCSS } from 'fg-loadcss/src/loadCSS'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Layout from '../components/layout'
import Item from '../components/Item'
import worksData from '../utils/worksData'
import injectSheet from 'react-jss'
import './index.css'

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: '1200px',
  },
  works: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  svg: {
    flex: 1,
  },
  page1: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: '1200px',
    height: 563,
  },
}

class IndexPageUnstyled extends Component {
  constructor() {
    super()
    this.state = {
      worksData: [],
    }
  }
  componentDidMount = () => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss')
    )
    console.log(worksData)
    this.setState({
      worksData,
    })
  }

  render() {
    let { worksData } = this.state
    let { classes } = this.props
    return (
      <Layout>
        <section className={classes.page1}>
          <div style={{ flex: 1 }}>
            <Typography variant="headline" gutterBottom>
              Hi, I’ m Tugi{' '}
            </Typography>{' '}
            <Typography variant="subheading" gutterBottom>
              I’ m a full - stack designer / developer based in San Francisco
              Bay Area.My skills and experience include UI + UX design, front -
              end development, back - end development, and involvement in
              product launches.My strong programming fundamentals and passion
              for tech allow me to quickly pick up new frameworks and
              languages.Feel free to download my resume.Get in touch, or find me
              elsewhere:
              <Icon
                className="fab fa-github-alt"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => {
                  window.open('https://github.com/tuguScript/', '_blank')
                }}
              />{' '}
              <Icon
                className="fab fa-linkedin-in"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/tuguldurtech/',
                    '_blank'
                  )
                }}
              />{' '}
              <Icon
                className="fab fa-twitter"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => {
                  window.open('https://twitter.com/tuguldur_01', '_blank')
                }}
              />{' '}
            </Typography>{' '}
          </div>{' '}
          <div className={classes.svg}>
            <div className="video-wrapper">
              <video
                className="video"
                src="https://res.cloudinary.com/narative/video/upload/v1524716897/narative-wave.webm"
                autoplay="true"
                muted
                loop
                width="100%" height="563"
                style={{position: 'relative',
                  overflow: 'hidden',
                  clipPath: 'url(#mask)'}}
              />
              <svg className="svg-overlay" style={{position: 'relative',
    zIndex: 10,
    width: '100%',}}>
                <clipPath id="mask">
                  <text
                    y="50vh"
                    style={{
                      fontSize: '50vw',
                      fontFamily: 'Roboto',
                      fontWeight: 'bold',
                    }}
                  >
                    T
                  </text>
                </clipPath>
              </svg>
            </div>
          </div>{' '}
        </section>{' '}
        <section className={classes.container}>
          <Typography variant="headline" gutterBottom>
            WORKS{' '}
          </Typography>{' '}
          <div className={classes.works}>
            {' '}
            {worksData.map((data, i) => {
              return <Item key={i} data={data} />
            })}{' '}
          </div>{' '}
        </section>{' '}
        <section className={classes.container}>
          <Typography variant="headline" gutterBottom>
            Contact{' '}
          </Typography>{' '}
          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <TextField
                required
                id="outlined-email-input"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-full-width"
                label="Message"
                style={
                  {
                    // margin: 8,
                  }
                }
                name="message"
                placeholder="Message"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button color="primary" type="submit">
                Send
              </Button>
            </form>
          </div>{' '}
        </section>{' '}
      </Layout>
    )
  }
}

const IndexPage = injectSheet(styles)(IndexPageUnstyled)

export default IndexPage
