import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'


import './App.css';
//changes to imports 

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#54bf98",
    },
    secondary: {
      main:"#fbfbfb",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             NFTicket is the world first NFT oriented Ticketing solution, powered by Moralis
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
           We aim to provide custom digital artwork on our tickets relfecting the event or venue the tickets give access to.
          </Typography>
        </div>

            <div>
                <Grid container spacing = {3}>
                
                <Grid item sm = {2}  xs = {0}>
                  <div> 
                      
                  </div>
                </Grid>
                <Grid item sm = {4} xs= {6}>
                  <div> 
                    <Typography variant="h1">
                      something about our tickets
                   </Typography>
                  </div>
                </Grid>
                 <Grid item sm = {4} xs= {6}>
                   <div> 
                       <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                 Word of the Day
                            </Typography>
                           <Typography variant="h5" component="div">
                              </Typography>
                             <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                 adjective
                             </Typography>
                            <Typography variant="body2">
                            well meaning and kindly.
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                         
                        {'"a benevolent smile"'}
                       </Typography>
                     </CardContent>
                     <CardActions>
                       <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
               </div>
                </Grid>
                <Grid item sm = {2} xs={0}> 
                  <div> 
                      
                  </div>
                </Grid>
                </Grid>
            </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;