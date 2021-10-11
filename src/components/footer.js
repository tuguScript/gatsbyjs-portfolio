import React from "react"
import GatsbyIcon from "../images/svg/gatsby.svg"
import ReactIcon from "../images/svg/react.svg"
import GraphqlIcon from "../images/svg/graphql.svg"
import JssIcon from "../images/svg/jss.svg"
import MaterialUiIcon from "../images/svg/material-ui.svg"
import WebpackIcon from "../images/svg/webpack.svg"
import BabelIcon from "../images/svg/babel.svg"
import NetlifyIcon from "../images/svg/netlify.svg"
import Typography from "@material-ui/core/Typography"
import Tooltip from "@material-ui/core/Tooltip"

const Footer = () => {
  const items = [
    {
      name: "gatsby",
      url: "https://www.gatsbyjs.org/",
      comp: GatsbyIcon,
      alt: "icon",
    },
    {
      name: "react",
      url: "https://reactjs.org/",
      comp: ReactIcon,
      alt: "icon",
    },
    {
      name: "graphql",
      url: "http://graphql.org/",
      comp: GraphqlIcon,
      alt: "icon",
    },
    { name: "jss", url: "http://cssinjs.org/", comp: JssIcon, alt: "icon" },
    {
      name: "webpack",
      url: "https://webpack.js.org/",
      comp: WebpackIcon,
      alt: "icon",
    },
    { name: "babel", url: "https://babeljs.io/", comp: BabelIcon, alt: "icon" },
    {
      name: "netlify",
      url: "https://www.netlify.com/",
      comp: NetlifyIcon,
      alt: "icon",
    },
  ]
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", width: 400 }}>
        <Typography variant="subheading" gutterBottom>
          built with:
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flex: "auto",
          }}
        >
          {items.map((item, i) => (
            <Tooltip title={item.name}>
              <a href={item.url} key={i}>
                <img
                  key={i}
                  src={item.comp}
                  style={{ width: 22 }}
                  alt={item.alt}
                />
              </a>
            </Tooltip>
          ))}
        </div>
      </div>
    </footer>
  )
}
export default Footer
