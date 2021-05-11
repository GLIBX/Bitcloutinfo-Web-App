import { useEffect, useState } from "react";
import { Card, Table, Button } from "react-bootstrap";
import { getBitcloutPrice, getProfiles } from "../server/service";

const CreatorsList = () => {
  const [creators, setCreators] = useState([]);

  const computeCoinPrice = (coinPriceNanos) => {
    let price = coinPriceNanos / 1000000000 * localStorage.getItem('bitclout_price')
    return `$ ${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  }

  const computeTotalUsdLocked = (bitcloutNanos) =>  {
    let result = bitcloutNanos / 1000000000 * localStorage.getItem('bitclout_price')
    return `$ ${result.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  }

  const computeFounderReward = (basisPoints) => {
    let result = basisPoints / 100
    return `${result.toFixed(0)}%`
  }

  const fetchProfiles = async () => {
    await Promise.all([getProfiles(), getBitcloutPrice()])
      .then((resp) => {
        localStorage.setItem("bitclout_price", resp[1]["bitclout_price"]);
        let newCreators = [];
        
        for (const [index, creator] of resp[0].ProfilesFound.entries()) {
          newCreators.push(
            <tr>
              <td>{index+1}</td>
              <td><img src={creator.ProfilePic} alt="pic" width="30px" height="30px"></img> {creator.Username}</td>
              <td>{creator.IsVerified ? '✔️' : '❌'}</td>
              <td>{computeCoinPrice(creator.CoinPriceBitCloutNanos)}</td>
              <td style={{ color: "green" }}>+0.04%</td>
              <td>{computeFounderReward(creator.CoinEntry.CreatorBasisPoints)}</td>
              <td>{computeTotalUsdLocked(creator.CoinEntry.BitCloutLockedNanos)}</td>
              <td style={{ color: "green" }}>{creator.CoinEntry.NumberOfHolders}</td>
              <td>3,400</td>
              <td>0</td>
              <td>
                <Button>View</Button>
              </td>
            </tr>
          )
        }
        setCreators(newCreators);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  useEffect(() => {
    fetchProfiles();
  });

  return (
    <>
      <Card bg="light" className="CreatorsCard m-3 z-depth-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Verified</th>
              <th>Coin Price</th>
              <th>Change 24h</th>
              <th>Founder Reward</th>
              <th>Total USD Locked</th>
              <th>Holders</th>
              <th>Followers</th>
              <th>Posts</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {creators}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default CreatorsList;
