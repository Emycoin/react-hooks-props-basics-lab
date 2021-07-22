import React from "react";
import Links from "./Links";

function displayBio(bio) {
  if(bio) {
    return <p>{bio}</p>
  }
  return null;
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {displayBio(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.links.github} linkedin={props.links.linkedin} />

    </div>
  );
}

export default About;
