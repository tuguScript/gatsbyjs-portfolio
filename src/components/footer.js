import React from 'react'
import { Link } from 'gatsby'
import Icon from '@material-ui/core/Icon'
import ReactSVG from '../images/svg/react.svg'

const Footer = () => (
  <footer
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div>
      <ReactSVG />
      <Icon className="fab fa-github" />
      <Icon className="fab fa-linkedin-in" />
      <Icon className="fab fa-twitter" />
    </div>
  </footer>
)

export default Footer
