import React from 'react'
import { Link } from 'gatsby'
import Icon from '@material-ui/core/Icon'
import GatsbyIcon from '../images/svg/gatsby.svg'
import ReactIcon from '../images/svg/react.svg'
import GraphqlIcon from '../images/svg/graphql.svg'
import JssIcon from '../images/svg/jss.svg'
import MaterialUiIcon from '../images/svg/material-ui.svg'
import WebpackIcon from '../images/svg/webpack.svg'
import BabelIcon from '../images/svg/babel.svg'
import NetlifyIcon from '../images/svg/netlify.svg'
import injectSheet from 'react-jss'
import Typography from '@material-ui/core/Typography'

const styles = {
  svg: {
    width: '22px',
    height: '22px',
  },
  footer: {},
}

const FooterUnstyled = ({ classes }) => {
  const items = [
    { name: 'gatsby', url: 'https://www.gatsbyjs.org/', comp: GatsbyIcon },
    { name: 'react', url: 'https://reactjs.org/', comp: ReactIcon },
    { name: 'graphql', url: 'http://graphql.org/', comp: GraphqlIcon },
    { name: 'jss', url: 'http://cssinjs.org/', comp: JssIcon },
    {
      name: 'material-ui',
      url: 'https://material-ui-next.com/',
      comp: MaterialUiIcon,
    },
    { name: 'webpack', url: 'https://webpack.js.org/', comp: WebpackIcon },
    { name: 'babel', url: 'https://babeljs.io/', comp: BabelIcon },
    { name: 'netlify', url: 'https://www.netlify.com/', comp: NetlifyIcon },
  ]
  return (
    <footer className={classes.footer}>
      <div>
        <Typography variant="subheading" gutterBottom>
          built with:
        </Typography>
        {items.map((item, i) => (
          <a href={item.url}>

            <img key={i} src={item.comp} className={classes.svg} />
          </a>
        ))}
      </div>
    </footer>
  )
}

const Footer = injectSheet(styles)(FooterUnstyled)

export default Footer
