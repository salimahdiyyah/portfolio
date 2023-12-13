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
            from <span className="purple"> Bekasi, Indonesia.</span>
            <br />
            I have just completed an intensive data analysis and software engineering program by Kampus Merdeka x RevoU, where I gained a strong foundation in learning statistical analysis, data visualization in Google Data Studio (Looker Studio) and Google BigQuery.
            <br />

            I also learned how to create web interactive, such as figma, nodejs, expressjs, cyclic, railway as well as programming languages such as Python, SQL, HTML, CSS, and javascript.
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
