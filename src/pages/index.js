import React, { Component } from 'react'
import { Link } from 'gatsby'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import { AccessAlarm } from '@material-ui/icons'
import Icon from '@material-ui/core/Icon'
import { loadCSS } from 'fg-loadcss/src/loadCSS'
import TextField from '@material-ui/core/TextField'

import Layout from '../components/layout'
import Item from '../components/Item'
import worksData from '../utils/worksData'

class IndexPage extends Component {
  componentDidMount = () => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss')
    )
    console.log(worksData)
  }

  render() {
    return (
      <Layout>
        <section>
          <div>
            <Typography variant="headline" gutterBottom>
              Hi, I’m Tugi
            </Typography>
            <Typography variant="subheading" gutterBottom>
              I’m a full-stack designer/developer based in San Francisco Bay
              Area. My skills and experience include UI+UX design, front-end
              development, back-end development, and involvement in product
              launches. My strong programming fundamentals and passion for tech
              allow me to quickly pick up new frameworks and languages. Feel
              free to download my resume. Get in touch, or find me elsewhere:
              <Icon className="fab fa-github" />
              <Icon className="fab fa-linkedin-in" />
              <Icon className="fab fa-twitter" />
            </Typography>
          </div>
          <div>svg</div>
        </section>
        <section>
          <Typography variant="headline" gutterBottom>
            WORKS
          </Typography>
          <div>
            <Item />
          </div>
        </section>
        <section>
          <Typography variant="headline" gutterBottom>
            Contact
          </Typography>
          <div>
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
              label="Label"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Full width!"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </section>

        {/* <h1> Hi people </h1> <p> Welcome to your new Gatsby site. </p>
        <p> Now go build something great. </p>
        <Typography variant="display4" gutterBottom>
          Display 4
        </Typography>
        <AccessAlarm />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Icon className="fa fa-plus-circle" />
        <Link to="/page-2/"> Go to page 2 </Link> */}
      </Layout>
    )
  }
}

export default IndexPage
