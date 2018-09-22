import React, { Component } from 'react'
import { Link } from 'gatsby'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import { AccessAlarm } from '@material-ui/icons'
import Icon from '@material-ui/core/Icon'
import { loadCSS } from 'fg-loadcss/src/loadCSS'
import Button from '@material-ui/core/Button'

import Layout from '../components/layout'

class IndexPage extends Component {
  componentDidMount = () => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss')
    )
  }

  render() {
    return (
      <Layout>
        <h1> Hi people </h1> <p> Welcome to your new Gatsby site. </p>
        <p> Now go build something great. </p>
        <Typography variant="display4" gutterBottom>
          Display 4
        </Typography>
        <AccessAlarm />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Icon className="fa fa-plus-circle" />
        <Link to="/page-2/"> Go to page 2 </Link>
      </Layout>
    )
  }
}

export default IndexPage
