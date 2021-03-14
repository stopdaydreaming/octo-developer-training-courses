import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from "./components/navigation/Navigation";
import Courses from "./components/courses/Courses";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <Row>
          <Col>
            <Courses />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
