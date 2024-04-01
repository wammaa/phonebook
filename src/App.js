import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './component/ContactList';

function App() {
  return (
    <body className="main">
      <div>
        <h1 className="title">연락처</h1>
        <Container>
          <Row>
            <Col lg={6}>
              <ContactForm/>
            </Col>
            <Col lg={6}>
              <ContactList/>
            </Col>
          </Row>
        </Container>
      </div>
    </body>
  );
}

export default App;
