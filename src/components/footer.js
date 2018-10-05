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

const Footer = ({  }) => {
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
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', width: 400 }}>
        <Typography variant="subheading" gutterBottom>
          built with:
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flex: 'auto',
          }}
        >
          {items.map((item, i) => (
            <a href={item.url}>
              <img key={i} src={item.comp} style={{ width: 22 }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
export default Footer
