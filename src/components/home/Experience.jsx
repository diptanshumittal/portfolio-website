import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Container, Jumbotron} from "react-bootstrap";

const useStyles = makeStyles({
    base: {
        boxShadow: "0 1rem 3rem rgb(0 0 0 / 18%) !important",
        width: "70%",
        margin: "2% auto"
    },
    root: {
        minWidth: 275,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: '1.5em',
        fontWeight: 550,
    },
    pos: {
        fontSize: '1.15em',
        marginBottom: 12,
        float: "left",
    },
    titBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});


const Experience = () => {
    const classes = useStyles();
    return (
        <section id="experience">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 class="heading">Experience</h2>

                    <Card className={classes.base} variant="outlined" >
                        <CardContent className={classes.root}>
                            <div className={classes.titBox}>
                                <Typography className={classes.title}>
                                    Google Summer of Code
                                </Typography>
                                <p style={{margin: "0"}}>
                                    4 Months
                                </p>
                            </div>
                            <Typography className={classes.pos} color="textSecondary">
                                Student Developer
                            </Typography>
                            <Typography variant="body2" component="p"
                                        style={{textAlign: "left", color: "rgba(0,0,0,0.5)", fontSize: "1em"}}>
                                Working on the development of an online platform, CompEngine-Features, for comparing the
                                performance of time-series analysis methods on real time-series data, including a wide
                                range of neural dynamics. Backend - Django, Frontend - React, Database - MongoDB
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.base} variant="outlined" >
                        <CardContent className={classes.root}>
                            <div className={classes.titBox}>
                                <Typography className={classes.title}>
                                    Expedia Group
                                </Typography>
                                <p style={{margin: "0"}}>
                                    2 Months
                                </p>
                            </div>
                            <Typography className={classes.pos} color="textSecondary">
                                Software Development Engineer Intern
                            </Typography>
                            <Typography variant="body2" component="p"
                                        style={{textAlign: "left", color: "rgba(0,0,0,0.5)", fontSize: "1em"}}>
                                Worked with Hotwire’s Data Foundation to create Microservices in spring boot with GraphQL endpoints and making them production-ready using AWS.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.base} variant="outlined" >
                        <CardContent className={classes.root}>
                            <div className={classes.titBox}>
                                <Typography className={classes.title}>
                                    Bhartiya Mahila Seva Sangh
                                </Typography>
                                <p style={{margin: "0"}}>
                                    3 Months
                                </p>
                            </div>
                            <Typography className={classes.pos} color="textSecondary">
                                Community Volunteer
                            </Typography>
                            <Typography variant="body2" component="p"
                                        style={{textAlign: "left", color: "rgba(0,0,0,0.5)", fontSize: "1em"}}>
                                Volunteered in supply chain team of NGO (Bhartiya Mahila Seva Sangh). Helped in
                                distribution and collection of the handcrafted material. Volunteered in
                                spreading the awareness for the DDU-GKY project of GOI.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className={classes.base} variant="outlined" >
                        <CardContent className={classes.root}>
                            <div className={classes.titBox}>
                                <Typography className={classes.title}>
                                    Svarochi
                                </Typography>
                                <p style={{margin: "0"}}>
                                    3 Months
                                </p>
                            </div>
                            <Typography className={classes.pos} color="textSecondary">
                                Android App Developer Intern
                            </Typography>
                            <Typography variant="body2" component="p"
                                        style={{textAlign: "left", color: "rgba(0,0,0,0.5)", fontSize: "1em"}}>
                                Designed an app for automatic testing of the lamps (Bluetooth enabled) being
                                produced. Firebase maintained the database of the test and its result done
                                by the user. The app connected to the light bulbs within 2 sec(average
                                case).
                            </Typography>
                        </CardContent>
                    </Card>

                </Jumbotron>
            </Container>
        </section>
    );
}

export default Experience;