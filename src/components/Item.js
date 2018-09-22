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
    return (
      <Card
      // className={classes.card}
      >
        <CardContent>
          <Typography
            //  className={classes.title}
            color="textSecondary"
          >
            Word of the Day{' '}
          </Typography>{' '}
          <Typography variant="headline" component="h2">
            be lent{' '}
          </Typography>{' '}
          <Typography
            // className={classes.pos}
            color="textSecondary"
          >
            adjective{' '}
          </Typography>{' '}
          <Typography component="p">
            well meaning and kindly. <br /> {'"a benevolent smile"'}{' '}
          </Typography>{' '}
        </CardContent>{' '}
        <CardActions>
          <Button size="small"> Learn More </Button>{' '}
        </CardActions>{' '}
      </Card>
    )
  }
}
