import React, { Component } from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Container from "./components/Container/Container";
import Row from "./components/Row/Row";
import Column from "./components/Column/Column";
import DigiCard from "./components/DigiCard";
import digimons from "./digimons.json";
import "./App.css"

function shuffleDigimons(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        digimons,
        currentScore: 0,
        topScore: 0,
        answer: "",
        clicked: [],
    }; 
    
    handleClicked = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.setState({
                clicked: this.state.clicked.concat(id)
            })
            this.handleIncrement();
        } else {
            console.log("Already Clicked");
            this.handleRestartGame();
        }
    }

    handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
          currentScore: newScore
        });
        
        if (newScore >= this.state.topScore) {
            this.setState({ 
                topScore: newScore,
                answer: "You're Correct"
            });
            
          }
        else if (newScore === 9) {
            this.setState({ answer: "You win!" });
            this.handleRestartGame();
          }
          this.handleShuffle();
      }



      handleRestartGame = () => {
        this.setState({
          currentScore: 0,
          topScore: this.state.topScore,
          answer: "Incorrect Guess!! Start Over!!",
          clicked: []
        });
        this.handleShuffle();
      };
  
      handleShuffle = () => {
        let shuffledDigimons = shuffleDigimons(digimons);
        this.setState({ digimons: shuffledDigimons });
      };

    render() {
      return (
        <div>
        <Jumbotron />
        <Wrapper>
        <NavBar 
            score={this.state.currentScore}
            topScore={this.state.topScore}
            answer={this.state.answer}
        />

        <Container>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
            <Row>
          {this.state.digimons.map(digimon => (
            <Column size="md-4 sm-6">
            <DigiCard
              id={digimon.id}
              key={digimon.id}
              handleClicked={this.handleClicked}
              handleIncrement={this.handleIncrement}
              handleShuffle={this.handleShuffle}
              handleRestartGame={this.handleRestartGame}
              image={digimon.image}
            />
            </Column>
          ))}
          </Row>
        </Container>
        </Wrapper>
        </div>
      );
    }
  }

export default App;
