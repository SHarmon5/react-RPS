import React, { Component } from 'react';
import { Container, Header } from "semantic-ui-react";
import './App.css';
import RockPaperScissors from './RockPaperScissors';

class App extends Component {



  
  render() {
    return (
      <Container>
        <Header style={{ display: "flex", justifyContent: "center", }}>
          <h1>Let's play Rock Paper Scissors!</h1>
        </Header>
        <RockPaperScissors />

      </Container>
    );
  }
}



export default App;
