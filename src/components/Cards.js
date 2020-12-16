import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    
    background:'rgba(0,0,0,0.5)',
    margin:'20px',
    // minWidth:'600px'
  },
  media: {
    height: 440,
  },
  title:{
    fontFamily:'Indie Flower',
    fontWeight:'bold',
    fontSize:'2rem',
    color:'#fff'
  },
  desc:{
    fontFamily:'Indie Flower',
    fontSize:'1.1rem',
    color:'#ddd'
  }
});

export default function BikiniCard({bikini,checked}) {
  const classes = useStyles();

  return (
      <Collapse in={checked} {...checked? {timeout:1000}:{}}>
    <Card className={classes.root}>
   
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL+bikini.image}
          title="Contemplative Reptile"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
          {bikini.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {bikini.desc}
          </Typography>
        </CardContent>
  
    </Card>
          </Collapse>
  );
}
