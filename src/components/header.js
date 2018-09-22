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
      <Icon
        className="fab fa-github-alt"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          window.open('https://github.com/tuguScript/', '_blank')
        }}
      />
      <Icon
        className="fab fa-linkedin-in"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          window.open('https://www.linkedin.com/in/tuguldurtech/', '_blank')
        }}
      />
      <Icon
        className="fab fa-twitter"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          window.open('https://twitter.com/tuguldur_01', '_blank')
        }}
      />
      <Icon
        className="fas fa-envelope"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          window.open('mailto:tuguscript@gmail.com', '_blank')
        }}
      />
      <Icon
        className="far fa-sun"
        style={{ cursor: 'pointer' }}
        onClick={() => {

        }}
      />
      <Icon
        className="far fa-moon"
        style={{ cursor: 'pointer' }}
        onClick={() => {

        }}
      />
      {/* <i class="fas fa-envelope"></i> */}
    </div>
  </header>
)

export default Header
