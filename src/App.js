/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback} from 'react';
import './App.css';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { async } from 'q';

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
  const [spacing] = React.useState(2);
  const classes = useStyles();

  const axiosInstance = axios.create({
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTY4NTUwODE0LCJleHAiOjE1NjkxNTU2MTR9.25EW7Y24UKafhODIGnFfHg2rgZPKtTgk0GqzjzY5B7iqeSuDMnO2E0L6U3BgMFxogilkTZcmF0GzWv844HNkGQ',
      'Content-Type': 'application/json'
    }
  });

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await axiosInstance.get('http://localhost:8080/api/')
      setData(response.data)
      //console.log(response.headers);
    }
    fetchData();

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
                    Bienvenido
                  </Typography>
                  <Typography component="p">
                    Inicie sesion para continuar
                    {data.map(item => (
                      <li key={item.id}>
                        {item.nombre}
                      </li>
                    ))}
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
   
  /*  async function fetchData() {
  useEffect(() => {
     const fetchData = async () => {
       const result = await axios(
         'http://localhost:8080/api/',
       );
       setData(result.data);
     };
     fetchData();
   }, []); 
  
      /*  axiosInstance.get('http://localhost:8080/api/').then((result) => {
         setData(result.data)
         console.log(result.headers);
       }); */
