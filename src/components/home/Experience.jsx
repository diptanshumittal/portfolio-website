import React from 'react';
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Experience = () => {
    return (  
        <section id="experience">
            <Container>
                <Jumbotron fluid className="bg-white" >
                        <h2 class="heading">Experience</h2>
                        <div id="experience-timeline">
                            <div class="vtimeline-point"><div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div><div class="vtimeline-block"><span class="vtimeline-date">May 2019 – June 2019</span><div data-date="May 2019 – June 2019" class="vtimeline-content">
                                <h3>Svarochi</h3>
                                <h4>Android App Developer Intern</h4>
                                <p>
                                    Designed an app for automatic testing of the lamps (Bluetooth enabled) being produced. Firebase maintained the database of the test and its result done by the user. The app connected to the light bulbs within 2 sec(average case).
                                </p>
                            </div></div></div>
                            
                            <div class="vtimeline-point"><div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div><div class="vtimeline-block"><span class="vtimeline-date">May 2019 – June 2019</span><div data-date="May 2019 – June 2019" class="vtimeline-content">
                                <h3>PaceDat</h3>
                                <h4>App Developer Intern</h4>
                                <p>
                                Designed a flutter app and database for the startup. The app served as the platform for the users to learn the chapters via notes and videos and raise queries. App also had the feature of live contest.
                                </p>
                            </div></div></div>

                            <div class="vtimeline-point"><div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div><div class="vtimeline-block"><span class="vtimeline-date">May 2019 – June 2019</span><div data-date="May 2019 – June 2019" class="vtimeline-content">
                                <h3>Mathskikaksha</h3>
                                <h4>Web Developer Intern</h4>
                                <p>
                                Built a website using bootstrap and responsible for maintenance and updates of the website.
                                </p>
                            </div></div></div>

                            <div class="vtimeline-point"><div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div><div class="vtimeline-block"><span class="vtimeline-date">May 2019 – June 2019</span><div data-date="May 2019 – June 2019" class="vtimeline-content">
                                <h3>Bhartiya Mahila Seva Sangh</h3>
                                <h4>Community Work</h4>
                                <p>
                                Worked with the NGO (Bhartiya Mahila Seva Sangh) and volunteered in distribution chain of materials and collecting the handcrafted material. Volunteered in the DDU-GKY project of central government to help the unemployed youth in rural areas by providing them skills.
                                </p>
                            </div></div></div>
                            
                        </div>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Experience;