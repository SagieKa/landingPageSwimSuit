import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import BikiniCard from './Cards'
import bikini from '../static/bikinis'
import useWindowPosition from '../hook/useWindowPosition'
import Grid from '@material-ui/core/Grid';

const useStyles =makeStyles((theme)=>({
root:{
    minHeight:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    flexWrap:'wrap'


}
}))

export default function Bikinis() {
  const classes =useStyles();
  const checked =useWindowPosition('header')
  const items = bikini.map((bikin)=>{
            return <BikiniCard bikini={bikin} checked={checked}/> 
  })
    return (
        <div className={classes.root} id='place-to-visit'>
            

            
{items}

           
       
           

        </div>
  )
}