import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const quotes = [
  { saying: "Veni, Vidi, Vici", author: 'Julius Caesar' },
  { saying: 'The way I see it, if you want the rainbow you must put up with the rain', author: 'Dolly Parton'},
  { saying: 'The effect you have on other people is the most valuable currency there is.', author: 'Jim Carrey'}
]

export default function Quote () {
  const [i, setI] = useState(0);

  const newQuote = () => {
    if(i < quotes.length -1) setI(i + 1)
    else setI(0)
  }

  return (
    <section>
      <Container onClick={newQuote} className="quote-container">
        <Row className="text-center">
          <Col>
            <p><q>{quotes[i].saying}</q></p> - {quotes[i].author}
          </Col>
        </Row>
      </Container>
    </section>
  )
}