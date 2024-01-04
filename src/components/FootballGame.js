import React from "react";
import './style.css'

function MissedGoal(){
  return <h1 className='goal'>MISSED</h1>
}

function MadeGoal(){
  return <h1 className='goal'>GOAL !!!!</h1>
}

function FootballGame(props){
  
  const {isGoal} = props;
  if(isGoal){
    return <MadeGoal/>
  }
  return <MissedGoal/>
  
}

export default FootballGame;