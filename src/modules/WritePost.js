import React, {useState} from 'react';
import {addBlog} from '../actions/index';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  width100: {
    width: '100%',
    marginTop: '15px'
  }
}));


function mapDispatchToProps(dispatch) {
  return {
    addBlog: blog => dispatch(addBlog(blog))
  };
}

const WritePostClass = props => {
  const classes = useStyles();
  const [author, setAuthor] = useState('A nice guy');
 
  
  function handleSubmit(event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let headline = document.getElementById("headline").value;
    let content = document.getElementById("content").value;
    let author = document.getElementById("author").value;
    let blog = {
      id: Math.random() + "",
      title: title,
      headline: headline,
      author: author,
      content: content,
    };
    props.addBlog(blog);
    props.history.push("/posts");
  }
  
  return (
    <div>
      <Container fixed>
        <h1>Add Blog Post</h1>
        <Grid container spacing={3}>
          <Grid item xl={6} md={6} xs={12}>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField id="title" fullWidth margin="normal" label="Input Your Title" type="text" color="primary"/>
              <TextField id="headline" fullWidth margin="normal" label="Input Your Headline" type="text" color="primary"/>
              <TextField id="author" fullWidth multiline margin="normal" label="Author" value={author} type="text" onChange={(e)=> setAuthor(e.target.value)} color="primary"/>
              <br></br>
              Content:
              <TextareaAutosize id="content" className={classes.width100} fullWidth aria-label="minimum height"
                                rowsMin={5} />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
const WritePost = connect(null, mapDispatchToProps)(WritePostClass);

export default WritePost;
