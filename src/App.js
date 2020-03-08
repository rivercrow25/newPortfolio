import React from 'react';
import NavBar from './components/nav'
import Header from './components/header'
import Section from './components/sections'
import Project from './components/projects'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      {Section('Blog', 'I will be trying to keep up with a blog', 'Visit my blog page')}
      {Section('Resume', 'I dont have one yet :D', 'visit this empty page anyway')}
      {Section('Contact', 'You can find me on slack or email me', 'Visit this page to view my contact details')}
      {/* {Project('Save the animals!', 'build Week project 1', 'A marketing website built with html and css for my first build week at lamda', 'https://github.com/BW-SaveTheAnimalsTeam3/marketing-page', 'https://savetheanimalsweb28.netlify.com')}
      {Project('Brick break', 'My first game', 'I used this game to try and teach myself es6 syntax before i found lamda and failed, I attempted this again after attending lamda for 3 weeks', 'https://github.com/rivercrow25/randomGame', 'https://one-off-brickbreakgame.netlify.com')}
      {Project('Nasa Api', 'Two day project', 'this is a project we worked on durring class to learn react app and advanced styling techniques', 'https://github.com/rivercrow25/nasa-photo-of-the-day', 'https://nasa-photo-of-the-dayweb28.netlify.com')} */}
      {Project('Save the animals!', 'HTML', 'CSS', 'Created a marketing page', 'A marketing website built with html and css for my first build week at lamda', 'https://github.com/BW-SaveTheAnimalsTeam3/marketing-page', 'https://savetheanimalsweb28.netlify.com')}
      {Project('Brick break', 'JavaScript', 'Html', 'Proving to myself lamda was a good choice', 'I used this game to try and teach myself es6 syntax before i found lamda and failed, I attempted this again after attending lamda for 3 weeks', 'https://github.com/rivercrow25/randomGame', 'https://one-off-brickbreakgame.netlify.com')}
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
