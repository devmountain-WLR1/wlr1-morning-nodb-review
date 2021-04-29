import React from 'react';
import './App.css';
import axios from 'axios';
import Post from './Post.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      userInput: ''
    }
  }

  componentDidMount(){
    axios.get('/api/posts')
    .then( res => {
      this.setState({
        posts: res.data
      })
    }).catch( err => console.log(err))
  }

  changeHandler = e => {
    this.setState({
      userInput: e.target.value
    })
  }

  addPost = () => {
    axios.post('/api/posts', { text: this.state.userInput })
    .then( res => {
      this.setState({
        posts: res.data,
        userInput: ''
      })
    }).catch( err => console.log(err))
  }

  render(){
    const mappedPosts = this.state.posts.map( element => {
      return <Post key={element.id} post={element}/>
    })
    return (
      <div className="App">
        <h1>Check out my social media app!</h1>
        <input type="text" onChange={this.changeHandler} placeholder="type something" value={this.state.userInput}/>
        <button onClick={this.addPost}>Add Post</button>
        {mappedPosts}
      </div>
    );
  }
}

export default App;
