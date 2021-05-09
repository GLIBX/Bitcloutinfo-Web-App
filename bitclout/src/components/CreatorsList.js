import { Card, Row, Col, Table, Button } from "react-bootstrap"


const CreatorsList = () => {
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
                            <th>Likes</th>
                            <th>Joined</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>elon musk</td>
                            <td>✔️ </td>
                            <td>$69,321.53</td>
                            <td style={{'color': 'green'}}>+0.04%</td>
                            <td>2%</td>
                            <td>$8,246,144.64</td>
                            <td style={{'color': 'green'}}>+$5,124.76</td>
                            <td>3,400</td>
                            <td>0</td>
                            <td>10</td>
                            <td>0</td>
                            <td><Button>Buy</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>craig</td>
                            <td>✔️ </td>
                            <td>$69,321.53</td>
                            <td style={{'color': 'green'}}>+0.04%</td>
                            <td>2%</td>
                            <td>$8,246,144.64</td>
                            <td style={{'color': 'green'}}>+$5,124.76</td>
                            <td>3,400</td>
                            <td>0</td>
                            <td>10</td>
                            <td>0</td>
                            <td><Button>Buy</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        </>
    )
};

export default CreatorsList;