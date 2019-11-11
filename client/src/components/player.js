import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    width: 340,
    margin: '20px 8px',
    textAlign: 'center',
    // background: '#424242',  
    // color: '#fff',
  },
  media: {
    height: 240,
    background: '#fff'
  },
  button: {
    color: '#90caf9'
  },
  links: {
    textDecoration: 'none',
    color: '#fff'
  }
});

const Player = (props) => {
  const classes = useStyles()
  console.log(props)
  return (
    <Card id={props.id} className={classes.card}>
      <h2>
        {props.name}S
      </h2>
      <p>Country: {props.country}</p>
      <p>Searches: {props.searches}</p>
    </Card>
  )
}

export default Player


