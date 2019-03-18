import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component {
  render() {
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) =>
      post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || []; // So we can loop over an empty array if no comments or push new comments in
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} />
      </div>
    )
  }
}
