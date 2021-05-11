import {
  FormControl,
  Button,
  Navbar,
  Container,
  Col,
  InputGroup,
} from "react-bootstrap";

import Logo from '../logo.png'

const HeaderTab = () => {
  return (
    <>
      <Container fluid>
        <Navbar bg="light" className="pt-3 pb-3">
          {/* <Col md="1"></Col> */}
          <Col md="8">
            <Container className="text-left">
              <Navbar.Brand href="#home"><img src={Logo} alt="logo" className="logo"></img> <h2 className="header">MyBitcloutInfo</h2></Navbar.Brand>
            </Container>
          </Col>
          <Col md="4">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <InputGroup className="m-3">
                <FormControl placeholder="Search" />
                <InputGroup.Append>
                  <Button variant="outline-success" className="mr-2">
                    Search
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Navbar.Collapse>
          </Col>
        </Navbar>
      </Container>
    </>
  );
};

export default HeaderTab;
