import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentWillMount() {
    console.log("This is working");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
        console.log("data", data);
      })

      .catch((err) => console.log("Error : ", err.message));
  }
  render() {
    const postsItems = this.state.posts.map((post) => {
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

export default Post;
