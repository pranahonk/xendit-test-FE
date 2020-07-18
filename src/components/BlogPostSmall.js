import React from 'react';
import {connect} from 'react-redux';
import {deleteBlog} from '../actions/index';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const BlogPostSmallClass = (props) => {
  const handleDelete = () => {
    props.deleteBlog(props.blog.id);
  }
  
  const classes = useStyles();
  
  return (
    <Card className={classes.root + ' blogPostSmall'}>
      <Link to={"/posts/" + props.blog.id}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://picsum.photos/200/300"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.blog.title}
            </Typography>
            <Typography variant="subtitle1" value="bold" color="#424242" component="p">
              {props.blog.author}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.blog.headline}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary" onClick={handleDelete}>
          <DeleteIcon color="secondary"/>
        </Button>
        <Link to={"/posts/" + props.blog.id}><Button size="small" color="primary">Read more</Button></Link>
      </CardActions>
    </Card>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBlog: blog => dispatch(deleteBlog(blog))
  };
}

export default connect(null, mapDispatchToProps)(BlogPostSmallClass);
