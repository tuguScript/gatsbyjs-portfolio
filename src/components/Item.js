import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'

const styles = {
  card: {
    width: 370,
  }
}

class ItemUnstyled extends Component {
  render() {
    let { data } = this.props
    let { classes } = this.props
    return (
      <Card
      className={classes.card}
      >
        <CardContent>
          <Typography variant="headline" component="h2">
            {data.title}
          </Typography>
          <Typography variant="subheading" >
            {data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={data.link}> APP </Button>
          {data.github ? <Button href={data.github} size="small"> CODE </Button> : null}
        </CardActions>
      </Card>
    )
  }
}

const Item = injectSheet(styles)(ItemUnstyled)
export default Item