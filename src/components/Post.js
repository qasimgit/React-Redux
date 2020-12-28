import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPosts } from "../Redux/actions/postActions";

class Post extends Component {
  componentWillMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const postsItems = this.props.posts.map((post) => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>This is post component</h1>
        {postsItems}
      </div>
    );
  }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStatetoProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStatetoProps, { fetchPosts })(Post);
