import { API_BASED_URL } from "./config";
import queryString from "querystring";

export default function get(path, queryParams) {
  const query = queryString.stringify(queryParams);
  debugger;
  fetch(`${API_BASED_URL}${path}?${query}`, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin":
        "https://3000-jhpbri-planandgo-6hjyoy4hpcx.ws-us60.gitpod.io",
    },
  })
    .then((response) => {
      console.log("yay");
      console.log(response);
    })
    .catch((error) => {
      console.log("sad");
      console.log(error.message);
    });
}
