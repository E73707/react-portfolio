import React from "react";
import Description from "./home/description";
import Education from "./home/education";
import Skills from "./home/skills";

export default function Home() {
  return (
    <div className="body">
      <h1>About Me</h1>
      <img className="profileImg" src="/images/0.jpg" alt="me"></img>
      <Description />
      <Education />
      <Skills />
    </div>
  );
}
