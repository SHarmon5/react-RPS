import React from 'react';
import {Container, Image, Button } from 'semantic-ui-react';


class RockPaperScissors extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      compAnswer: ["rock", "paper", "scissors"],
      selectAnswer: null,
      clicked: false,
      response: null
    }
  }

  handleClick = (id) => {
    this.setState({
      
      clicked: true,
      selectAnswer: this.state.compAnswer[Math.floor(Math.random() *
      this.state.compAnswer.length)]
    })
    
    if (id === "1") {
      this.computerChoice1()
     
    } else if (id ==='2') {
      this.computerChoice2()
     
    } else {
      this.computerChoice3()
     
      
    }
  }
 

  computerChoice1 = () => {

      if (this.state.selectAnswer === "scissors")
         {this.state.response = "computer chose Scissors, you win!"}
      else if (this.state.selectAnswer === "paper")
      {this.state.response = "computer chose Paper, you lose"}
        else
        {this.state.response = "it's a bust, try again"}            
  }
  
  computerChoice2 = () => {

    if (this.state.selectAnswer === "scissors")
       {this.state.response = "computer chose Scissors, you lose"}
    else if (this.state.selectAnswer === "paper")
    {this.state.response = "it's a bust, try again"}
      else
      {this.state.response = "computer chose Rock, you win!"}
}

computerChoice3 = () => {

  if (this.state.selectAnswer === "scissors")
     {this.state.response = "it's a bust, try again"}
  else if (this.state.selectAnswer === "paper")
  {this.state.response = "computer chose Paper, you win!"}
    else
    {this.state.response = "computer chose Rock, you lose"}
}
  
  render () {
    return  (
      <Container style={{display: "flex", justifyContent: "space-between"}}>
        <div>
          <Button onClick={() => this.handleClick('1')} ><Image src={require("./rock.jpeg") } /></Button>
          <h1 style={{display: "flex", justifyContent: "center"}}>{this.state.response}</h1>
        </div>
        <div>
          <Button onClick={() => this.handleClick('2')} ><Image src={require("./paper.jpeg")} alt="paper" /></Button>
          
        </div>
        <div>
          <Button onClick={() => this.handleClick('3')}><Image src={require("./scissors.jpeg")} alt="scissors" /></Button>
        </div>
          
      </Container>
    )
  }
}

export default RockPaperScissors;