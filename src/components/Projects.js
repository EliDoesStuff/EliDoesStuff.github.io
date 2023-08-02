import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

    const projects = [
        {
            title: "Find & Seek",
            description: "Adventure-Seeking Social Media App",
            imgUrl: projImg1,
            link: "https://gitlab.com/team-safari/FindAndSeek",
        },
        {
            title: "Astro",
            description: "Repair & Service Spacecraft Vehicles",
            imgUrl: projImg2,
            link: "https://gitlab.com/barrettAJ/astro",
        },
        {
            title: "Character Chronicles",
            description: "Create & Organize Wiki-Like Pages For Your Roleplay Characters",
            imgUrl: projImg3,
            link: "https://gitlab.com/spicefe/roleplay-character-organizer",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            These are all of the projects I have worked on and am currently working on.<br></br>
                            Click on the project to be taken to the repository and explore them yourself!
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    No projects here.
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    No projects here.
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}
