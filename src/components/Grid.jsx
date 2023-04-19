import { Col, Container, Row } from "react-bootstrap";

export default function Grid () {

  return (
    <section>
      <Container className="bg-warning grid-container">
        <Row>
          <Col sm={12} md={4}>
            <h2>Why Boca Code?</h2>
            <p>I choose boca code at the beginning solely for it being close by but quickly I came to meet the instructors and alumni and found a new sense of appreciation for the boot camp. The instructors really care about you and your progress as well as having a great curriculum and bringing amazing personalities to their lessons.</p>
          </Col>

          <Col sm={12} md={4}>
            <h2>Upcoming Project Ideas?</h2>
            <p></p>
          </Col>

          <Col>
            <h2>Ideal Work Place?</h2>
            <p>Because of my current living situation being able to work remote is really what I'm looking for. However personality wise I do like being close by to be able to connect with co-workers and have a space to collaborate.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}