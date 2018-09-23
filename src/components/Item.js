import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

export default class Item extends Component {
  render() {
    let { data } = this.props
    return (
      <Card
      // className={classes.card}
      >
        <CardContent>
          <Typography variant="headline" component="h2">
            {data.title}
          </Typography>
          <Typography variant="subhead" component="p">
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
