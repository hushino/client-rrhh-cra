/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3, 2),
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const [data, setData] = useState([]);
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  useEffect(() => {
    axios.get('http://localhost:8080/api/').then(result => setData(result.data));
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={6}>
          <Grid container justify="center" spacing={spacing}>
            {[0].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper}>
                  <Typography variant="h5" component="h3">
                    This is a sheet of paper.
        </Typography>
                  <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
        </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}

export default App

/* useEffect(() => {
   const fetchData = async () => {
     const result = await axios(
       'http://localhost:8080/api/',
     );
     setData(result.data);
   };
   fetchData();
 }, []); */
