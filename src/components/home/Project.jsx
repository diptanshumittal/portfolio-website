import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";

const Project = () => {
  return (
    <Jumbotron fluid id="projects" className="bg-light">
      <Container >
        <h2 class="heading">Projects</h2>
        <Container>
            <Row>

                <div class="project no-image">
                    <div class="project-info">
                        <h3>Classification of Network Traffic and Network Intrusion Detection</h3>
                        <p>
                            Made a stacked model for classification which was able to classify intrusion on first level using decision tree classifier and classified the attack category in the second level using XGBoost classifier. The model was trained on UNSW-NB-15 dataset.
                        </p>
                        <a href="https://drive.google.com/file/d/1w6S7YteRAyuaMQ71Xc1Www0LwrQaMRv4/view?usp=sharing" target="_blank">View Report</a><br/>
                        <a href="https://github.com/underhood31/Network-Intrusion-Detection-System" target="_blank">View Repo</a>
                    </div>
                </div>

                <div class="project no-image">
                    <div class="project-info">
                        <h3>Object detection and localization for AUVSI-SUAS</h3>
                        <p>
                            Processing live video feed from the drone and detecting object using edge detection. Classifying the detected object using Yolo-v3 (trained for suctom class) and localizing the targets detected.
                        </p>
                        <a href="https://github.com/UAS-IIITD/cv-task-2020" target="_blank">View Repo</a>
                    </div>
                </div>

                <div class="project no-image">
                    <div class="project-info">
                        <h3>Plants vs Zombies</h3>
                        <p>
                            Made a replica of Plants vs Zombies game using JavaFX and impleme serialization/deserialization, thread synchronization, OOPs in the game.
                        </p>
                        <a href="https://github.com/diptanshumittal/PlantsVsZombies" target="_blank">View Repo</a>
                    </div>
                </div>

                <div class="project no-image">
                    <div class="project-info">
                        <h3>Election Portal</h3>
                        <p>
                            A platform designed for analysing the voting pattern and voter demographics. The platform also had the feature of voting to predict the probable outcome.
                            The database was stored on the Azure SQL database, and the backend was developed using the Django framework.
                            Concurrency control, two-phase locking, logging transaction and multithreading were implemented in the backend.
                        </p>
                        <a href="https://github.com/diptanshumittal/Election_Portal" target="_blank">View Repo</a>
                    </div>
                </div>

            </Row>
        </Container>
      </Container>
    </Jumbotron>
  );
};

export default Project;
