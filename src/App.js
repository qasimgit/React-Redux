import "./App.css";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
