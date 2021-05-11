import axios from "axios";

export function getBitcloutPrice() {
  return axios
    .get("http://0.0.0.0:5000/api/v1/get-bitclout-price")
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      console.log(err.message);
      return err;
    });
};

export function getProfiles() {
  return axios
    .post("http://0.0.0.0:5000/api/v1/get-profiles", {
      PublicKeyBase58Check: "",
      Username: null,
      UsernamePrefix: null,
      Description: null,
      OrderBy: "influencer_coin_price",
      NumToFetch: 14,
      ReaderPublicKeyBase58Check:
        "BC1YLiZ3Jgat6FKmWR8mcZEyW5JkGghspJtSX3WVijnL87kV1sD9Npo",
      ModerationType: "leaderboard",
      FetchUsersThatHODL: false,
      AddGlobalFeedBool: false,
    })
    .then((resp) => {
      return resp.data;
    })
    .catch((err) => {
      console.log(err.message);
      return err;
    });
}
