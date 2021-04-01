import React from 'react';
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Education = () => {
    return (  
        <Jumbotron className="bg-white m-0" id="education">
            <Container>
                <h2 class="heading">Education</h2>
                    <div class="education-block">
                        <h3>Indraprastha Institute of Information Technology, New Delhi</h3>
                        <span> CGPA : 8.75 </span>
                        <p><h4> B.Tech (CSAM) <span> (till 5th sem) </span><br/> 2018-2022 </h4></p>
                    </div>
                    <div class="education-block">
                        <h3>Air Force Golden Jubliee Institute, New Delhi</h3>
                        <span> Percentage : 91.6% </span>
                        <p><h4>Class 12th (CSBE)<br/> 2016-2017 </h4></p>
                    </div>
                    <div class="education-block">
                        <h3>Air Force Golden Jubliee Institute, New Delhi</h3>
                        <span> Percentage : 96% </span>
                        <p><h4>Class 10th (CSBE)<br/> 2014-2015 </h4></p>
                    </div>      
            </Container>
        </Jumbotron>
            
    );
}
 
export default Education;
