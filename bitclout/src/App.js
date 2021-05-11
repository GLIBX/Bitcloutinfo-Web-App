import Header from './components/Header'
import RateCard from './components/RateCard'
import { Row, Col } from 'react-bootstrap'
import CreatorsList from './components/CreatorsList'

function App() {
  return (
    <>
      <Header />
      <Row>
        <Col md="2">
          <RateCard />
        </Col>
        <Col md="10">
          <CreatorsList />
        </Col>
      </Row>
      <hr></hr>
    </>
  );
}

export default App;
