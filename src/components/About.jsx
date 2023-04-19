import { Col, Container, Row } from "react-bootstrap";

export default function About () {

  return (
    <main>
      <Container>
      <Row className="text-center">

        <Col sm={12} md={6}>
          <img src="https://picsum.photos/200/200" 
          alt='profile' 
          className="rounded-circle"/>
        </Col>

        <Col>
          <h1 className="mt-3">Nicholas Morgan</h1>
          <p>As someone who loves animals, coding, and intellectual conversation, I am a curious and compassionate individual who enjoys exploring new ideas and learning from others. My interest in coding reflects my love for problem-solving and creative thinking. I am fascinated by the endless possibilities that coding provides and am constantly seeking new challenges to improve my skills. Whether I'm building a website, creating an app, or working on a programming project, I find immense satisfaction in the process of creating something from scratch. Finally, my passion for intellectual conversation demonstrates my desire to engage with others on a deeper level. I enjoy discussing a wide range of topics, from politics and philosophy to science and technology, and am always eager to learn from others' perspectives. Through meaningful conversations, I believe we can expand our understanding of the world and become more empathetic, well-rounded individuals.</p>
        </Col>

      </Row>
      </Container>
    </main>
  )
}

