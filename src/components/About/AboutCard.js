import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bakhram Abdurakhimov </span>
            from <span className="purple"> Russia, Chelyabinsk.</span>
            <br />I'm a result oriented front-end developer with experience in creating Landing Pages and SPA
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Workout exercises
            </li>
            <li className="about-activity">
              <ImPointRight />  Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight />  Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
