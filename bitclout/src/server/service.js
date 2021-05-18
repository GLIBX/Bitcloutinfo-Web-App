import axios from "axios";

export function getBitcloutPrice() {
  return axios
    .get("https://api-bitclout.herokuapp.com/api/v1/get-bitclout-price")
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
    .post("https://api-bitclout.herokuapp.com/api/v1/get-profiles", {
      PublicKeyBase58Check: "",
      Username: null,
      UsernamePrefix: null,
      Description: null,
      OrderBy: "influencer_coin_price",
      NumToFetch: 140,
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


export function getTopGainers() {
  return axios
    .post("https://api-bitclout.herokuapp.com/api/v1/get-profiles", {
      PublicKeyBase58Check: "",
      Username: null,
      UsernamePrefix: null,
      Description: null,
      OrderBy: "influencer_coin_price",
      NumToFetch: 5,
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
