import React, { Component } from 'react';
import { connect } from "react-redux";
import BlogPost from '../components/BlogPost';

const mapStateToProps = state => {
    return { blogs: state.blogs, comments: state.comments};
};


class SinglePostClass extends Component {

    findBlogById(){
        for(const blog in this.props.blogs){
            if(this.props.blogs[blog].id === this.props.match.params.id){
                return this.props.blogs[blog];
            }
        }
        return null;
    }
    
    filterCommentPage(){
        return this.props.comments.filter(com => com.page);
    }

    render(){
        return(
            <BlogPost blog={this.findBlogById()} listComments={this.filterCommentPage()}></BlogPost>
        )
    }
}

const SinglePost = connect(mapStateToProps)(SinglePostClass)

export default SinglePost
