import { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { getTopGainers } from "../server/service";

const SideBar = () => {
  const [topGainers, setTopGainers] = useState([]);
  const [showInfo] = useState(false);

  const computeCoinPrice = (coinPriceNanos) => {
    let price =
      (coinPriceNanos / 1000000000) * localStorage.getItem("bitclout_price");
    return `$${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  const fetchGainers = async () => {
    await Promise.all([getTopGainers()]).then((resp) => {
      let gainers = [];

      for (const [index, gainer] of resp[0].ProfilesFound.entries()) {
        gainers.push(
          <Col md="10" className="pt-3" key={index}>
            <Row>
              <Col md="2">
                <img
                  src={gainer.ProfilePic}
                  alt="pic"
                  width="25px"
                  height="25px"
                ></img>
              </Col>
              <Col md="5">
                <h6 style={{ fontSize: "13px" }}>
                  {gainer.Username}{" "}
                  {gainer.IsVerified ? (
                    <img
                      src="https://img.icons8.com/fluent/48/000000/good-quality.png"
                      alt=""
                      width="12px"
                      height="12px"
                    ></img>
                  ) : (
                    ""
                  )}
                </h6>
              </Col>
              <Col md="5">
                <h6 style={{ color: "green" }}>
                  {computeCoinPrice(gainer.CoinPriceBitCloutNanos)}
                </h6>
              </Col>
            </Row>
          </Col>
        );
      }
      setTopGainers(gainers);
    });
  };

  useEffect(() => {
    fetchGainers();
  });

  return (
    <>
      <Card bg="light" className="RateCard m-4">
        <Col md="10">
          <h5>Bitclout price</h5>
          {/* <hr></hr> */}
          <h6>~${localStorage.getItem("bitclout_price")} per coin</h6>
        </Col>
      </Card>
      <Card bg="light" className="WishlistCard m-4">
        <Col md="10">
          <h6 className="topGainers">Top Gainers</h6>
        </Col>
        {topGainers}
      </Card>
      <Card bg="light" className="CoinInfoCard m-4">
        <Col md="10">
          <h6 className="coinInfoHeader pt-3">Creator's Bitclout Info</h6>
        </Col>
        <Col md="10" className="infoSection p-1">
        {
          showInfo ? null : (
            <h4 className="noInfoText">Click View Creator's Coin To See Data Here!</h4>
          )
        }
        </Col>
      </Card>
    </>
  );
};

export default SideBar;
