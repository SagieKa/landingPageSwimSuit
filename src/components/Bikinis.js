import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import BikiniCard from './Cards'
import bikini from '../static/bikinis'
import useWindowPosition from '../hook/useWindowPosition'
import Grid from '@material-ui/core/Grid';

const useStyles =makeStyles((theme)=>({
root:{
  margin:'auto',
  flexGrow: 1,
    minHeight:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    flexWrap:'wrap'


} ,
bikiniCard:{
  padding: theme.spacing(0),
}
}))

export default function Bikinis() {
  const classes =useStyles();
  const checked =useWindowPosition('header')
  const items = bikini.map((bikin)=>{
            return <Grid md={5} xs={12}><BikiniCard className={classes.bikiniCard} bikini={bikin} checked={checked}/> </Grid>
  })
    return (
      <Grid container  direction="row"
      justify="space-between"
      alignItems="baseline"
       className={classes.root}  spacing={3} id='place-to-visit'>
         {items}
      </Grid>
        // <div className={classes.root} id='place-to-visit' >
        //   {items}
        //   </div>
  )
}