import { useState } from "react";
import Header from './components/Header'
import SideBar from './components/SideBar'
// import Footer from './components/Footer'
import { Row, Col } from 'react-bootstrap'
import CreatorsList from './components/Creators'

function App() {
  const [creator, setCreator] = useState(null)

  return (
    <>
      <Header />
      <Row>
        <Col md="2">
          <SideBar creator={creator}/>
        </Col>
        <Col md="10">
          <CreatorsList setCreator={setCreator} />
        </Col>
      </Row>
      {/* <Footer /> */}
    </>
  );
}

export default App;
