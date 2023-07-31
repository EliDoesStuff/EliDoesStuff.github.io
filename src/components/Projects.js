import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export const Projects = () => {

    const projects = [
        {
            title: "Find & Seek",
            description: "Adventure-Seeking Social Media App",
            imgUrl: projImg1,
        },
        {
            title: "Astro",
            description: "Repair & Service Spacecraft Vehicles",
            imgUrl: projImg2,
        },
        {
            title: "Character Chronicles",
            description: "Create & Organize Wiki-Like Pages For Your Roleplay Characters",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            This is placeholder text. This text is meant to be a placeholder
                            until I put in text which is not a placeholder.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
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
                                                    <p>{project.title}</p>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Placeholder Text.
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Placeholder Text.
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
