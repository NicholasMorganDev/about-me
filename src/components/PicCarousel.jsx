import { Col, Container, Row, Carousel } from "react-bootstrap";

export default function PicCarousel () {

  return (
    <section>
      <Container className="carousel-container">
        <Row>
          <Col sm={12} className="p-0">
            <Carousel>
              <Carousel.Item>
                <img src="https://picsum.photos/300/200/?random-1" 
                className="d-block w-100"
                alt="slide 1" />
                <Carousel.Caption>
                <h2>First Item</h2>
                <p>First Items are great because they come first in line.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img src="https://picsum.photos/300/200/?random-2" 
                className="d-block w-100"
                alt="slide 2" />
                <Carousel.Caption>
                <h2>Second Item</h2>
                <p>My second item in my first carousel.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img src="https://picsum.photos/300/200/?random-3" 
                className="d-block w-100"
                alt="slide 3" />
                <Carousel.Caption>
                <h2>Third Item</h2>
                <p>My third item, lorem ipsum</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}