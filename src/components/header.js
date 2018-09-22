import React from 'react'
import { Link } from 'gatsby'
import Icon from '@material-ui/core/Icon'

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div>
      <Icon className="fab fa-github" />
      <Icon className="fab fa-linkedin-in" />
      <Icon className="fab fa-twitter" />
    </div>
  </header>
)

export default Header
