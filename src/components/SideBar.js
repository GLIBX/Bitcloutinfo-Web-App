import { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import BounceLoader from "react-spinners/BounceLoader";
import { getTopGainers } from "../server/service";

const SideBar = (props) => {
  const [topGainers, setTopGainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const computeCoinPrice = (coinPriceNanos) => {
    let price =
      (coinPriceNanos / 1000000000) * localStorage.getItem("bitclout_price");
    return `$${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  const fetchGainers = async () => {
    await Promise.all([getTopGainers()])
      .then((resp) => {
        let gainers = [];

        for (const [index, gainer] of resp[0].ProfilesFound.entries()) {
          gainers.push(
            <Col md="10" className="topGainers" key={index}>
              <Row>
                <Col md="2">
                  <img
                    src={`https://bitclout.com/api/v0/get-single-profile-picture/${gainer.PublicKeyBase58Check}`}
                    alt="pic"
                    width="15vw"
                    height="15vh"
                  ></img>
                </Col>
                <Col md="5">
                  <h6 style={{ fontSize: "0.9rem" }}>
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
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  useEffect(() => {
    fetchGainers();
  });

  useEffect(() => {
    if (props.creator == null) {
      setShowInfo(false)
    } else {
      setShowInfo(true)
    }
  }, [setShowInfo, props.creator])

  return (
    <>
      <Card bg="light" className="RateCard m-4">
        <Col md="10">
          <h5>Bitclout price</h5>
          {/* <hr></hr> */}
          <h6>~${localStorage.getItem("bitclout_price")} per coin</h6>
        </Col>
      </Card>
      <Card bg="light" className="WishlistCard">
        <Col md="10">
          <h6 className="topGainersText">Top Gainers</h6>
        </Col>
        {loading ? <BounceLoader color="black" size="50" /> : topGainers}
      </Card>
      <Card bg="light" className="CoinInfoCard m-4">
        <Col md="10">
          <h6 className="coinInfoHeader pt-3">Creator's Bitclout Info</h6>
        </Col>
        <Col md="10" className="infoSection p-1">
          {showInfo ? (
              <h6>{props.creator.name}</h6>

          ) : (
            <h4 className="noInfoText">
              Click View Creator's Coin To See Data Here!
            </h4>
          )}
        </Col>
      </Card>
    </>
  );
};

export default SideBar;
