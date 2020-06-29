import React from 'react';
import NavBar from './components/nav'
import Header from './components/header'
import Section from './components/sections'
import Project from './components/projects'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Header />
      {Section(<a href='https://docs.google.com/document/d/1wsyyb04JRT1eC4xdZstSQm4kq4hipncNBXP3GMqy1vo/edit?usp=sharing'>View my resume</a>)}
      {Section('Contact', 'my email is nickmigel2@gmail.com')}
      {/* {Project('Save the animals!', 'build Week project 1', 'A marketing website built with html and css for my first build week at lamda', 'https://github.com/BW-SaveTheAnimalsTeam3/marketing-page', 'https://savetheanimalsweb28.netlify.com')}
      {Project('Brick break', 'My first game', 'I used this game to try and teach myself es6 syntax before i found lamda and failed, I attempted this again after attending lamda for 3 weeks', 'https://github.com/rivercrow25/randomGame', 'https://one-off-brickbreakgame.netlify.com')}
      {Project('Nasa Api', 'Two day project', 'this is a project we worked on durring class to learn react app and advanced styling techniques', 'https://github.com/rivercrow25/nasa-photo-of-the-day', 'https://nasa-photo-of-the-dayweb28.netlify.com')} */}
      {Project('Data driven transit!', 'React', 'SCSS', 'A single page application widget', 'Saves historical data in San Francisco to help SFMTA make informed descisions to better the transit systems', 'https://github.com/Lambda-School-Labs/sfmta-data-analysis-fe/tree/master/src', 'https://www.datadriventransit.org/')}
      {Project('Brick break', 'JavaScript', 'HTML', 'Proving to myself lamda was a good choice', 'I used this game to try and teach myself es6 syntax before i found lamda and failed, I attempted this again after attending lamda for 3 weeks', 'https://github.com/rivercrow25/randomGame', 'https://one-off-brickbreakgame.netlify.com')}
      {Project('Nasa Api', 'React', 'ReactStrap', 'javascript', 'this is a project we worked on durring class to learn react app and advanced styling techniques', 'https://github.com/rivercrow25/nasa-photo-of-the-day', 'https://nasa-photo-of-the-dayweb28.netlify.com')}
      {Project('Spotifind', 'React', 'Redux', 'CSS', 'A build week project that uses the spotify api to allow users to find songs based on any song you pick from a list of 70K', 'https://github.com/Build-Week-Spotify-Song-Suggester-5/Front-End-Dev', 'https://spotifind.now.sh/')}
    </div>
  );
}

export function About() {
  return (
    <div>

    </div>
  )
}



export default App;
