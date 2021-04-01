import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills({ heading, hardSkills, softSkills }) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (    
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 className="heading">{heading}</h2>
        <ul>
            <li>Java</li>
            <li>Python</li>
            <li>C/C++</li>
            <li>JavaScript</li>
            <li>Dart</li>
            <li>Node.js</li>
            <li>Julia</li>
            <li>React</li>
            <li>R</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
