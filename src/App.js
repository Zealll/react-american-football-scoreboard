//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(32)
  const [awayScore, setAwayScore] = useState(32)
  const [time, setTime] = useState(10)

  const [firstName, setFirstName] =useState('Elan')
  const [lastName, setLastName] = useState('Riznis')
  
  
  const combinedName = () => {
    console.log('on')
    return firstName.concat(lastName)
    
  }


  const timer = () => {
     time > 0 ? setTime(time - 1) : setTime(10)
  }
  
  useEffect(() => {
    const interval = setInterval(timer, 1000)
    return () => clearInterval(interval)
  }, [ time ])

  
  

  // Home Team Methods
  const homeTouchdown = () => {
    setHomeScore(homeScore + 7)
  }
  const homeFieldGoal = () => {
    setHomeScore(homeScore + 3)
  }


  // Away Team Methods
  const awayTouchdown = () => {
    setAwayScore(awayScore + 7)
  }
  const awayFieldGoal = () => {
    setAwayScore(awayScore + 3)
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h2 className="home__name">Lions</h2>
            <button onClick={combinedName}>See my full name</button>
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{time}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
    // <div>
    //   <h1>{firstName}</h1>
    //   <h1>{lastName}</h1>
    //   <button onClick={combinedName}>Combine</button>
    //   <h1>{combinedName}</h1>
    // </div>
  );
}

export default App;


