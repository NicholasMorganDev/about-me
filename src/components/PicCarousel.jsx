import { Col, Container, Row, Carousel } from "react-bootstrap";

export default function PicCarousel () {

  return (
    <section>
      <Container className="carousel-container">
        <Row>
          <Col sm={12} className="p-0">
            <Carousel>
              <Carousel.Item>
                <img src="/images/scale-image.png"
                className="d-block w-100 scale-image"
                alt="slide 1" />
                <Carousel.Caption>
                </Carousel.Caption>
                <p>This is one of the first webpages I worked on, it's an information page on how civilizations are classed from least advanced to most advanced.</p>
              </Carousel.Item>

              <Carousel.Item>
                <img src="/images/clock.png" 
                className="d-block w-100 clock-image"
                alt="slide 2" />
                <Carousel.Caption>
                </Carousel.Caption>
                <p>This is a simple clock I made using React.</p>
              </Carousel.Item>

              <Carousel.Item>
                <img src="/images/counter.png" 
                className="d-block w-100 counter-image"
                alt="slide 3" />
                <Carousel.Caption>
                </Carousel.Caption>
                <p>This is a simple Counter app that I made in React.</p>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}