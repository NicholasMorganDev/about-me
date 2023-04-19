import { Container, Row, Col } from "react-bootstrap";

export default function Quote () {

  return (
    <section>
      <Container className="quote-container">
        <Row className="text-center">
          <Col>
            <p><q>Veni, Vidi, Vici</q></p> - Julius Caesar
          </Col>
        </Row>
      </Container>
    </section>
  )
}