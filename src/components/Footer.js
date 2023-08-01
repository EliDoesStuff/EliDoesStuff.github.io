import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/elispicer/"><img src={navIcon1} /></a>
                            <a href="https://github.com/EliDoesStuff"><img src={navIcon2} /></a>
                            <a href="https://gitlab.com/spicefe"><img src={navIcon3} /></a>
                        </div>
                        <p>Thanks for looking! I hope you have an amazing day!</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
