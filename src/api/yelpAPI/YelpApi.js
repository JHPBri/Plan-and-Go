import { API_BASED_URL, BEARER_TOKEN } from "./config";
import queryString from "querystring";

export default async function get(path, queryParams) {
  const query = queryString.stringify(queryParams);
  debugger;
  let resp = await fetch(`${API_BASED_URL}${path}?${query}`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      Origin: "http://3000-jhpbri-planandgo-xkuug45abse.ws-us60.gitpod.io",
      withCredentials: true,
      "Access-Control-Allow-Origin": "*",
    },
  });
  debugger;
  console.log(resp);
  // .then((response) => {
  //   console.log("yay");
  //   console.log(response);
  // })
  // .catch((error) => {
  //   console.log("sad");
  //   console.log(error.message);
  // });
}
