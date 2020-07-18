import React from 'react';
import {connect} from "react-redux";
import BlogPostSmall from '../components/BlogPostSmall';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '50px',
    },
  }),
);

const mapStateToProps = state => {
  return {blogs: state.blogs};
};

function AllPostsClass(props) {
  const classes = useStyles();
  
  function convertBlogsToComponents() {
    return props.blogs.map((blog, i) =>  <Grid item lg={3} md={6} xs={12}><BlogPostSmall blog={blog} key={i}></BlogPostSmall></Grid>)
  }
  
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {convertBlogsToComponents()}
      </Grid>
    </div>
  )
}

const AllPosts = connect(mapStateToProps)(AllPostsClass)

export default AllPosts
