import Header from './components/Header'
import SideBar from './components/SideBar'
// import Footer from './components/Footer'
import { Row, Col } from 'react-bootstrap'
import CreatorsList from './components/Creators'

function App() {
  return (
    <>
      <Header />
      <Row>
        <Col md="2">
          <SideBar />
        </Col>
        <Col md="10">
          <CreatorsList />
        </Col>
      </Row>
      {/* <Footer /> */}
    </>
  );
}

export default App;
