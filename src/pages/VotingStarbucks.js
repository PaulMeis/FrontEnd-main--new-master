//VotingStarbucks.js: Just an example page for how a poll could look like


// import react components
import React, { useState } from "react";
import Poll from "react-polls";
//import already created custom styles
import { StyledFormArea, StyledSubTitle, StyledTitle } from "../components/Styles";
//import Navbar component
import Navbar from "./NavBar";

// Declaring poll question and answers
const pollQuestion = "Would you like another Starbucks on campus ?";
const answers = [
  { option: "Yes", votes: 6 },
  { option: "No", votes: 2 },
  {option: "I do not really care", votes: 17}
];

const Fakepolls = () => {
  // Setting answers to state to reload the component with each vote
  const [pollAnswers, setPollAnswers] = useState([...answers]);

  // Handling user vote
  // Increments the votes count of answer when the user votes
  const handleVote = (voteAnswer) => {
    setPollAnswers((pollAnswers) =>
      pollAnswers.map((answer) =>
        answer.option === voteAnswer
          ? {
              ...answer,
              votes: answer.votes + 1
            }
          : answer
      )
    );
  };

  return (
    <div>
      <Poll
        noStorage
        question={pollQuestion}
        answers={pollAnswers}
        onVote={handleVote}
      />
    </div>
  );
};

export default function VotingStarBucks() {
  return (
    <div className="VotingStarbucks">
      <Navbar/>

      <StyledFormArea>
        <StyledTitle>
        Starbucks Poll
        </StyledTitle>
      
          <StyledSubTitle>
          *Caution* You only have one vote, and once you cliked the vote button, there is no way back! *Caution*
          </StyledSubTitle>
        <Fakepolls />
      </StyledFormArea>
    </div>
  );
}
