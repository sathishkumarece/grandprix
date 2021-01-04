import schoolPamphlet from './schoolPamplet.jpg'
import schoolBuilding from './schoolBuilding.jpg'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className='App'>
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
      <Row>
        <Col md={6} sm={12}>
          <Container>
            <div className='information-container'>
            <div className='logo-container'>
              <Row>
                <h2>GrandPrix </h2>
              </Row>
              <Row>
                <h4>Global School</h4>
              </Row>
              </div>
              <div className='under-construction'>
                <div className='text-construction'>Site under construction...</div>
              <Row>
                <img
                  src={schoolBuilding}
                  className='building-img'
                  alt='school'
                />
              </Row>
              </div>
              <div className='logo-container'>
              <Row>
                <h5>Please refer to the pamphlet for more information</h5>
              </Row>
              </div>
            </div>
          </Container>
        </Col>
        <Col md={6} sm={12}>
          <div className='pamphlet-container'>
            <img src={schoolPamphlet} className='pamphlet-img' alt='school' />
            <div className='pamphlet-construction'></div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default App
