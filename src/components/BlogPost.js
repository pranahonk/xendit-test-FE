import React, {useState} from 'react';
import {addComment} from '../actions/index';
import {connect} from 'react-redux';
import {Avatar, Divider, Grid, TextField, Typography} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

function mapDispatchToProps(dispatch) {
  return {
    addComment: blog => dispatch(addComment(blog))
  };
}

function BlogPost(blog) {
  const [name, setName] = useState('A nice guy');
  const [comments, setComments] = useState('');
  
  console.log(blog)
 
  
  const handleInputComment = (e) => {
    e.preventDefault();
    
    let comment ={
      page: blog.blog.id,
      user: name,
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      comment: comments,
      created: "1 minute ago"
    }
    
    
    blog.addComment(comment);
  }
  return (
    <div className="page">
      <h1 className="title">{blog.blog.title}</h1>
      <Typography style={{textAlign: "right", margin: "0px 2% 30px 0"}} variant="h5"
                  gutterBottom>author: {blog.blog.author}</Typography>
      <Typography variant="body1" gutterBottom>{blog.blog.content}</Typography>
      <h3>Comments</h3>
      {blog.listComments ? blog.listComments.map((data, i) =>
          <Grid container wrap="nowrap" spacing={2} key={i}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={data.avatar}/>
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{margin: 0, textAlign: "left"}}>{data.user}</h4>
              <p style={{textAlign: "left"}}>
                {data.comment}
              </p>
              <p style={{textAlign: "left", color: "gray"}}>
                posted {data.created}
              </p>
            </Grid>
          </Grid>,
        <Divider variant="fullWidth" style={{margin: "30px 0"}}/>)
        : "wait..."
      }
      {/*<h3>Add Comments</h3>*/}
      {/*<Grid container spacing={3}>*/}
      {/*  <Grid item md={6}>*/}
      {/*    <form onSubmit={handleInputComment} noValidate autoComplete="off">*/}
      {/*      <TextField*/}
      {/*        id="name"*/}
      {/*        label="Enter Your Name"*/}
      {/*        fullWidth*/}
      {/*        color="primary"*/}
      {/*        value={name}*/}
      {/*        onChange={(e)=>{setName(e.target.value)}}*/}
      {/*      />*/}
      {/*      <TextareaAutosize id="comment" style={{width: "100%", marginTop: "15px"}} aria-label="minimum height"*/}
      {/*                        rowsMin={3} value={comments} onChange={(e)=>{setComments(e.target.value)}} />*/}
      {/*      <Button type="submit" variant="contained" color="primary">*/}
      {/*        Post*/}
      {/*      </Button>*/}
      {/*    </form>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
    </div>
  );
}

const WriteComment = connect(null, mapDispatchToProps)(BlogPost);

export default WriteComment;
