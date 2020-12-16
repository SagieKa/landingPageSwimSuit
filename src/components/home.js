import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import Header from './Header'
import Bikinis from './Bikinis' 
const useStyles =makeStyles((theme)=>({
root:{
    minHeight:'100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL+'homepic.jpg'})` ,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundAttachment:'fixed'

}
}))

export default function Home() {
  const classes =useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <Bikinis/>
        </div>
  )
}