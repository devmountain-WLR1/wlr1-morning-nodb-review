import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    axios.get('/getmyposts')
    .then( res => {
      this.setState({
        posts: res.data
      })
    })

  }

  render(){
    return (
      <div className="App">
        <h1>Check out my social media app!</h1>
      </div>
    );
  }
}

export default App;
