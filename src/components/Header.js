import React , {useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Collapse, IconButton, Toolbar} from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link as Scroll} from 'react-scroll'

const useStyles =makeStyles((theme)=>({
root:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100vh',
    color:'#fff',
    fontFamily:'Indie Flower'
 
},
appbar:{
    background:'none',

},
appbarTool:{
    width:'80%',
    margin:'auto'
},
icon:{
    color:'#fff',
    fontSize:'2rem'
},
appbarTitle:{
    flexGrow:'1'
},
colorTitle:{
    color:'#F4A261'
},
title:{
    color:'#fff',
    fontSize:'4.5rem'
},
container:{
    textAlign:'center'
},
goDown:{
    color:'#F4A261',
    fontSize:'4rem'
}
}))

export default function Header() {
  const classes =useStyles();
  const [checked,setChecked] =useState(false)
useEffect(()=>{
    setChecked(true)
},[])
    return (
        
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarTool}>
                <h1 className={classes.appbarTitle}> Ok<span className={classes.colorTitle}>Bikinis</span></h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} {...checked? {timeout:1000}:{}} collapsedHeight={50} >
            <div className={classes.container}>
            <h1 className={classes.title}>Welcome to My<br/>
             <span className={classes.colorTitle}> Bikinis </span> 
             </h1>
             <Scroll to='place-to-visit' smooth={true}>
            <IconButton >
                <ExpandMoreIcon className={classes.goDown}/>
            </IconButton>
            </Scroll>
            </div>
            </Collapse>
        </div>
        
  )
}