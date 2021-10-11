import React, { Component } from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import injectSheet from "react-jss"
import { createUseStyles } from "react-jss"

const backgroundColors = [
  "linear-gradient(209.21deg, rgb(87, 15, 141) 13.57%, rgb(243, 91, 160) 98.38%)",
  "linear-gradient(209.21deg, rgb(22, 155, 173) 13.57%, rgb(0, 54, 135) 98.38%)",
  "linear-gradient(209.21deg, rgb(0, 6, 149) 13.57%, rgb(116, 69, 154) 98.38%)",
  "linear-gradient(209.21deg, rgb(4, 55, 174) 13.57%, rgb(29, 81, 146) 98.38%)",
  "linear-gradient(209.21deg, rgb(16, 114, 204) 13.57%, rgb(89, 0, 159) 98.38%)",
  "linear-gradient(209.21deg, rgb(0, 6, 149) 13.57%, rgb(116, 69, 154) 98.38%)",
]

const useStyles = createUseStyles({
  card: {
    padding: 20,
    width: 370,
    borderRadius: 20,
    display: "grid",
    gridTemplateRows: "1fr 50px",
    // background: "green",
    background: props => {
      return backgroundColors[props.id]
    },
    "&:hover": {
      transform: "scale(1.1)",
      transition: "all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s",
    },
  },
  img: {
    height: 200,
    width: "100%",
  },
})

let styles = {}

function ItemUnstyled({ image, data, children, ...props }) {
  const classes = useStyles(props)
  return (
    <div className={classes.card}>
      <CardContent>
        <img src={image} className={classes.img} />
        <Typography variant="headline" component="h2" className={"white"}>
          {data.title}
        </Typography>
        <Typography className={"white"} variant="subheading">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={"white"} size="small" href={data.link}>
          {" "}
          More{" "}
        </Button>
        {data.github ? (
          <Button className={"white"} href={data.github} size="small">
            {" "}
            CODE{" "}
          </Button>
        ) : null}
      </CardActions>
    </div>
  )
}

const Item = injectSheet(styles)(ItemUnstyled)
export default Item

// class ItemUnstyled extends Component {
//   render() {
//     let { data, key } = this.props
//     let { classes } = this.props

//     return (
//       <div className={classes.card}>
//         <CardContent>
//           <Typography variant="headline" component="h2" className={"white"}>
//             {data.title}
//           </Typography>
//           <Typography className={"white"} variant="subheading">
//             {data.description}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button className={"white"} size="small" href={data.link}>
//             {" "}
//             APP{" "}
//           </Button>
//           {data.github ? (
//             <Button className={"white"} href={data.github} size="small">
//               {" "}
//               CODE{" "}
//             </Button>
//           ) : null}
//         </CardActions>
//       </div>
//     )
//   }
// }

// const Item = injectSheet(styles)(ItemUnstyled)
// export default Item
