import React from 'react'
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#cdcdcd'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    buttonText:{
        textDecoration: 'none',
        color: 'white'
    }

  }));

export default function MainPage() {

    const classes = useStyles();
    console.log(classes);
    return (
        <div className={classes.root}>
            {/* <Grid container spacing={6}>
                <Grid item xs={12}> */}
                    <Paper className={classes.paper}>
                        <h3>Alok Kumar - Assignment</h3>
                        <Button variant="contained" color="primary">
                            <Link to="/list" className={classes.buttonText}>Test</Link>
                        </Button>


                    </Paper>
                {/* </Grid>
            
            </Grid> */}
    </div>
    )
}
