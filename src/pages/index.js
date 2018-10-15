import React, { Component } from 'react'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import SendIcon from '@material-ui/icons/Send'
import Icon from '@material-ui/core/Icon'
import { loadCSS } from 'fg-loadcss/src/loadCSS'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MySnackbarContentWrapper from '../components/MySnackbarContent.jsx'
import Layout from '../components/layout'
import Item from '../components/Item'
import worksData from '../utils/worksData'
import injectSheet from 'react-jss'
import axios from 'axios'
import Grow from '@material-ui/core/Grow'
import Waypoint from 'react-waypoint'
import './index.css'
// TODO: on scrollUP, show header
// TODO:mobile responsive design
// TODO:resume nemeh && underline
// google analytics
// fade animation
// email send

// @media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ }
// @media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
// @media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
// @media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
// @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
// @media (min-width:1281px) { /* hi-res laptops and desktops */ }

const styles = () => ({
  container: {
    margin: '0 auto',
    maxWidth: '1200px',
  },
  works: {
    display: 'grid',
    justifyContent: 'space-between',
    margin: '100px 0px',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridRowGap: '4vh',
  },
  introText: { flex: 1, maxWidth: '32vw' },
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
  '@media (max-width:801px)': {
    works: {
      gridTemplateColumns: '1fr',
    },
    wrapper: {
      padding: '0px 30px',
    },
    page1: { display: 'block' },
    introText: {
      maxWidth: '100%',
    },
  },
  '@media (min-width: 1024px)': {
    button: {
      width: 200,
    },
  },
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class IndexPageUnstyled extends Component {
  constructor(props) {
    super(props)
    this.state = {
      worksData: [],
      contact: {
        name: '',
        email: '',
        message: '',
      },
      width: 0,
      height: 0,
      growCheckedPage1: false,
      growCheckedPage2: this.width < 481 ? false : true,
      showEmailSnack: { display: null, variant: '', message: '' },
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  componentDidMount() {
    if (typeof window !== `undefined`) {
      this.updateWindowDimensions()
    }
    window.addEventListener('resize', this.updateWindowDimensions)
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss')
    )
    this.setState({
      worksData,
    })
  }
  componentWillUnmount() {
    if (typeof window !== `undefined`) {
      window.removeEventListener('resize', this.updateWindowDimensions)
    }
  }
  updateWindowDimensions() {
    if (typeof window !== `undefined`) {
      this.setState({ width: window.innerWidth, height: window.innerHeight })
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'https://formspree.io/tuguscript@gmail.com',
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      },
      dataType: 'json',
    })
      .then(
        this.setState({
          showEmailSnack: {
            display: true,
            message: 'Sent!',
            variant: 'success',
          },
        })
      )
      .catch(error => {
        this.setState({
          showEmailSnack: {
            display: true,
            message: error,
            variant: 'error',
          },
        })
      })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({
      showEmailSnack: { display: false, message: '', variant: 'success' },
    })
  }
  render() {
    let { classes } = this.props
    const {
      worksData,
      name,
      email,
      message,
      growCheckedPage1,
      growCheckedPage2,
      width,
      height,
    } = this.state
    return (
      <Layout>
        <div className={classes.wrapper}>
          <section className={classes.page1}>
            <Waypoint
              onEnter={() => this.setState({ growCheckedPage1: true })}
              onLeave={() => this.setState({ growCheckedPage1: false })}
            />
            <Grow in={growCheckedPage1}>
              <div className={classes.introText}>
                <Typography
                  variant="headline"
                  gutterBottom
                  style={{ marginBottom: '52px' }}
                >
                  Hi, I’ m Tugi
                </Typography>
                <Typography variant="subheading" gutterBottom>
                  I’ m a full - stack designer / developer based in San
                  Francisco Bay Area. <br />
                  <br /> My skills and experience include UI + UX design, front
                  - end development, back - end development, and involvement in
                  product launches.My strong programming fundamentals and
                  passion for tech allow me to quickly pick up new frameworks
                  and languages.
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
            </Grow>

            <Grow
              in={growCheckedPage1}
              {...(growCheckedPage1 ? { timeout: 1000 } : {})}
            >
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
            </Grow>
          </section>
          <section className={classes.container}>
            <Grow in={growCheckedPage2}>
              <Typography variant="headline" gutterBottom>
                WORKS
              </Typography>
            </Grow>

            <div className={classes.works}>
              {worksData.map((data, i) => {
                let delay = i * 100
                return (
                  <Item
                    key={i}
                    data={data}
                    growCheckedPage2={this.state.growCheckedPage2}
                    delay={delay}
                  />
                )
              })}

              {width > 481 ? (
                <Waypoint
                  onEnter={() => this.setState({ growCheckedPage2: true })}
                  onLeave={() => this.setState({ growCheckedPage2: false })}
                />
              ) : null}
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
              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={this.state.showEmailSnack.display}
                autoHideDuration={3000}
                onClose={this.handleClose}
              >
                <MySnackbarContentWrapper
                  onClose={this.handleClose}
                  variant={this.state.showEmailSnack.variant}
                  message={this.state.showEmailSnack.message}
                />
              </Snackbar>
              <form
                name="contact"
                onSubmit={this.handleSubmit}
                style={{ marginBottom: '100px' }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </p>
                <TextField
                  required
                  id="outlined-text-input"
                  label="Your name"
                  type="text"
                  name="name"
                  margin="normal"
                  variant="filled"
                  fullWidth
                  value={name}
                  onChange={this.handleChange}
                />
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
        </div>
      </Layout>
    )
  }
}

const IndexPage = injectSheet(styles)(IndexPageUnstyled)
export default IndexPage
