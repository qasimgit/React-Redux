import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleOnChange}
            />
          </div>

          <div>
            <label>Body</label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleOnChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
