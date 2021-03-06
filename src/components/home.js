import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import Header from './Header'
import Bikinis from './Bikinis' 
import Form from './Form'
const useStyles =makeStyles((theme)=>({
root:{
    minWidth:'100%',
    minHeight:'100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL+'homepic.jpg'})` ,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundAttachment:'fixed',
    overflow:'hidden'

}
}))

export default function Home() {
  const classes =useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <Bikinis/>
            <Form/>
        </div>
  )
}