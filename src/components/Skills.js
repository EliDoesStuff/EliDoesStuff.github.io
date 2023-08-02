import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import caro1 from "../assets/img/caro1.png";
import caro2 from "../assets/img/caro2.png";
import caro3 from "../assets/img/caro3.svg";
import caro4 from "../assets/img/caro4.svg";
import caro5 from "../assets/img/caro5.png";
import caro6 from "../assets/img/caro6.svg";
import caro7 from "../assets/img/caro7.png";
import caro8 from "../assets/img/caro8.svg";
import caro9 from "../assets/img/caro9.svg";
import caro10 from "../assets/img/caro10.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                These are the frameworks and coding languages I have experience in.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={caro1} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={caro2} alt="Image" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={caro3} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={caro4} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={caro5} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={caro6} alt="Image" />
                                    <h5>Django</h5>
                                </div>
                                <div className="item">
                                    <img src={caro7} alt="Image" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={caro8} alt="Image" />
                                    <h5>FastAPI</h5>
                                </div>
                                <div className="item">
                                    <img src={caro9} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={caro10} alt="Image" />
                                    <h5>Docker</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    );

}
