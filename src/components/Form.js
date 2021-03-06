import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import WorkIcon from '@material-ui/icons/Work';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright ©SagieKarta '}
      {/* <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    "& .MuiFormLabel-root": {
        color: "white" ,
        fontFamily:'Indie Flower',
       
      }
    // backgroundColor:'rgba(0,0,0.5,0.5)'

  },
  submit: {
    fontFamily:'Indie Flower',
    margin: theme.spacing(3, 0, 2),
  },
  colorWhite:{
    color:'white',
    fontFamily:'Indie Flower'
    
    

      
  }
}));

export default function Form() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <WorkIcon />
        </Avatar>
        <Typography className={classes.colorWhite} component="h1" variant="h5" >
        To schedule an appointment:

        </Typography>
        <form className={classes.form} noValidate >
          <TextField
        
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Full Name"
            name="text"
            autoComplete="email"
            autoFocus
            InputProps={{
                className: classes.colorWhite ,
                
              }}
           
          />
          <TextField
       
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputProps={{
                className: classes.colorWhite
              }}
          />
          <TextField
            
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="number"
            label="Telephone"
            type="text"
            id="password"
            autoComplete="current-password"
            InputProps={{
                className: classes.colorWhite
              }}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}