import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import injectSheet from 'react-jss'
import Zoom from '@material-ui/core/Zoom'

const styles = {
  card: {
    // width: 370,
  },
}

const ItemUnstyled = ({ data, classes, growCheckedPage2, delay }) => {
  return (
    <Zoom in={growCheckedPage2} style={{ transitionDelay: growCheckedPage2 ? delay : 0 }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {data.title}
          </Typography>
          <Typography variant="subheading">{data.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={data.link}>
            {' '}
            APP{' '}
          </Button>
          {data.github ? (
            <Button href={data.github} size="small">
              {' '}
              CODE{' '}
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </Zoom>
  )
}

const Item = injectSheet(styles)(ItemUnstyled)
export default Item
