import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Salimah Mahdiyyah </span>
            <br />
            A passionate Informatics Engineering graduate with hands-on experience in data analysis and software development. My diverse background has equipped me with the skills to effectively transform data into strategic business insights while also creating and implementing functional applications.
            <br />
            I am a highly motivated and committed individual, always eager to contribute to innovative projects that make a positive difference.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Film
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Salimah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
