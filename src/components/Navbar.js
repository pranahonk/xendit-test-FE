import {Link} from 'react-router-dom';
import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    spacing: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dev Blog
          </Typography>
          <div className={classes.spacing}>
            <Link to='/'><Button variant="contained" size="medium" color="primary">Home</Button></Link>
            <Link to='/posts'><Button variant="contained" size="medium" color="primary">Posts</Button></Link>
            <Link to='/write'><Button variant="contained" size="medium" color="primary">Write a post</Button></Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
