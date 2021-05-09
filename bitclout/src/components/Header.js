import {
  FormControl,
  Button,
  Navbar,
  Container,
  Col,
  InputGroup,
} from "react-bootstrap";

import Logo from '../logo.jpeg'

const HeaderTab = () => {
  return (
    <>
      <Container fluid>
        <Navbar bg="light" className="pt-3 pb-3">
          <Col md="1"></Col>
          <Col md="8">
            <Container className="text-left">
              <Navbar.Brand href="#home"><img src={Logo} alt="logo" className="logo"></img> MYBITCLOUTINFO</Navbar.Brand>
            </Container>
          </Col>
          <Col md="2">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <InputGroup className="mb-3">
                <FormControl placeholder="Search" />
                <InputGroup.Append>
                  <Button variant="outline-success" className="mb-0">
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
