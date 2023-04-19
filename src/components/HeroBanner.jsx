import { Col, Container, Row } from "react-bootstrap"

export default function HeroBanner () {

  return (
    <section>
      <Container fluid className="bg-danger text-center hero-text p-3">
        <Row>
          <Col>
            Welcome to my About Me Page!
          </Col>
        </Row>
      </Container>
    </section>
  )
}