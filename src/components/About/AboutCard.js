import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naveen Malhotra </span>
            from <span className="purple"> Kanpur, Uttar Pradesh, India.</span>
            <br /> I am a final year student pursuing BTech Program in Computer and Communication Engineering from <span className="purple">Manipal University Jaipur</span>
            <br />
            
                       <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
    <ImPointRight /> 🚗 Cruisin' in my dream wheels
  </li>
  <li className="about-activity">
    <ImPointRight /> 🎧 Jammin' to bops
  </li>
  <li className="about-activity">
    <ImPointRight /> 🌱 Plant Mom/Dad Vibes
  </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "WORK UNTIL YOU ACHIEVE IT!"{" "}
          </p>
          <footer className="blockquote-footer">My Brain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
