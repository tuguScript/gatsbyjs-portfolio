import React, { Component } from 'react'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import SendIcon from '@material-ui/icons/Send'
import Icon from '@material-ui/core/Icon'
import { loadCSS } from 'fg-loadcss/src/loadCSS'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Layout from '../components/layout'
import Item from '../components/Item'
import worksData from '../utils/worksData'
import injectSheet from 'react-jss'
import './index.css'

// TODO: on scrollUP, show header
// TODO:mobile responsive design
// google analytics
// TODO:revealjs. everything
// TODO:moon sun icon change Animation
// TODO:email send

const styles = theme => ({
  container: {
    margin: '0 auto',
    maxWidth: '1200px',
  },
  works: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '100px 0px',
  },
  svg: {
    flex: 1,
    maxWidth: '32vw',
  },
  page1: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: '1200px',
    height: '90vh',
    padding: '15vh 0vh',
    justifyContent: 'space-between',
  },
  rightIcon: {
    marginLeft: '15px',
  },
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class IndexPageUnstyled extends Component {
  constructor() {
    super()
    this.state = {
      worksData: [],
      email: '',
      message: '',
    }
  }
  componentDidMount = () => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss')
    )
    this.setState({
      worksData,
    })
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(res => console.log(res))
      .catch(error => alert(error))
    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    let { worksData } = this.state
    let { classes } = this.props
    const { name, email, message } = this.state
    return (
      <Layout>
        <section className={classes.page1}>
          <div style={{ flex: 1, maxWidth: '32vw' }}>
            <Typography
              variant="headline"
              gutterBottom
              style={{ marginBottom: '52px' }}
            >
              Hi, I’ m Tugi
            </Typography>
            <Typography variant="subheading" gutterBottom>
              I’ m a full - stack designer / developer based in San Francisco
              Bay Area. <br />
              <br /> My skills and experience include UI + UX design, front -
              end development, back - end development, and involvement in
              product launches.My strong programming fundamentals and passion
              for tech allow me to quickly pick up new frameworks and languages.
              <br />
              <br /> Feel free to download my resume.
              <br />
              <br /> Get in touch, or find me elsewhere:
              <Icon
                className="fab fa-github-alt"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => {
                  window.open('https://github.com/tuguScript/', '_blank')
                }}
              />
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
              />
              <Icon
                className="fab fa-twitter"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => {
                  window.open('https://twitter.com/tuguldur_01', '_blank')
                }}
              />
            </Typography>
          </div>
          <div className={classes.svg}>
            <div className="video-wrapper">
              <video
                className="video"
                src="https://res.cloudinary.com/narative/video/upload/v1524716897/narative-wave.webm"
                autoPlay={true}
                muted
                loop
                width="100%"
                height="563"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  clipPath: 'url(#mask)',
                }}
              />
            </div>
          </div>
        </section>
        <section className={classes.container}>
          <Typography variant="headline" gutterBottom>
            WORKS
          </Typography>
          <div className={classes.works}>
            {worksData.map((data, i) => {
              return <Item key={i} data={data} />
            })}
          </div>
        </section>
        <section className={classes.container}>
          <Typography
            variant="headline"
            gutterBottom
            style={{ marginBottom: '100px' }}
          >
            Contact
          </Typography>
          <div>
            <form
              name="contact"
              onSubmit={this.handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label>
                  Your Email: <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message: <textarea name="message" />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* You still need to add the hidden input with the form name to your JSX form */}
              <input type="hidden" name="form-name" value="contact" />
              ...
            </form>
            <form onSubmit={this.handleSubmit}>
              <TextField
                required
                id="outlined-email-input"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="filled"
                fullWidth
                value={email}
                onChange={this.handleChange}
              />
              <TextField
                name="message"
                value={message}
                onChange={this.handleChange}
                required
                id="outlined-full-width"
                label="Message"
                multiline
                rows="6"
                fullWidth
                margin="normal"
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                color="primary"
                type="submit"
                variant="contained"
                style={{ marginTop: '16px' }}
              >
                Send
                <SendIcon className={classes.rightIcon} />
              </Button>
            </form>
          </div>
        </section>
      </Layout>
    )
  }
}

const IndexPage = injectSheet(styles)(IndexPageUnstyled)

export default IndexPage
