import React from 'react';
import axios from 'axios';
import Card from './components/card';
import './App.css';

class App extends React.Component {
  state = {
    userInfo: []
  };
  componentDidMount() {
    axios.get('https://api.github.com/users/garrettwyien')
      .then(res=> {
        console.log(res);
        this.setState({userInfo:res.data});
      })
      .catch(err=> {
        console.log(err);
      })
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Github User Cards</h1>
        </header>
          <Card userInfo={this.state.userInfo}/>
      </div>
    );
  }
};

export default App;
