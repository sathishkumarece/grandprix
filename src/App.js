import logo from './logo.svg';
import schoolPamplet from './schoolPamplet.jpg';
import schoolBuilding from './schoolBuilding.jpg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */}
      {/* <Container> */}
        <Row>
          <Col md={6} sm={12}>
            <Row>
              <h1>GrandPrix Global School</h1>
            </Row>
            <Row>
            <img src={schoolBuilding} className="img-responsive" alt="school" />
            </Row>
            <Row>
              <h5>GrandPrix Global School</h5>
            </Row>
          </Col>
          <Col md={6} sm={12}>
            <img src={schoolPamplet} className="img-responsive" alt="school" />
          </Col>
        </Row>
      {/* </Container> */}
    </div>
  );
}

export default App;
