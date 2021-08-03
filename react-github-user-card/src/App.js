import React from 'react';
import axios from 'axios';
import Card from './components/card';
import styled from 'styled-components';
import './App.css';

const StyledApp = styled.div `
display:flex;
flex-flow:column;
align-items:center;
`


class App extends React.Component {
  state = {
    userInfo: []
  };
  componentDidMount() {
    axios.get('https://api.github.com/users/garrettwyien')
      .then(res=> {
        // console.log(res);
        this.setState({userInfo:res.data});
      })
      .catch(err=> {
        console.log(err);
      })
  };

  render() {
    return (
      <StyledApp>
        <header>
          <h1>Github User Cards</h1>
        </header>
          <Card userInfo={this.state.userInfo}/>
      </StyledApp>
    );
  }
};

export default App;
