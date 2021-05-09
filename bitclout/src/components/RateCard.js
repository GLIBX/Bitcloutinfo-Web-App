import { Container, Card, Button, Col, Row } from "react-bootstrap";
import { BsFillReplyFill } from "react-icons/bs";

const RateCard = () => {
  return (
    <>
      <Card bg="light" className="RateCard m-3">
        <Col md="8">
          <h5>Bitclout price</h5>
          <hr></hr>
          <h6>~$182.28 USD per coin</h6>
        </Col>
      </Card>
      <Card bg="light" className="RateCard m-3">
        <Col md="8">
        <h5>Total Creators</h5>
          <hr></hr>
          <h6>~2,200</h6>
        </Col>
      </Card>
      <Card bg="light" className="RateCard m-3">
        <Col md="8">
        <h5>Verified Creators</h5>
          <hr></hr>
          <h6>~1,740</h6>
        </Col>
      </Card>
    </>
  );
};

export default RateCard;
