import axios from "axios";
import { baseUrl } from "../utils/utilFunctions";

const dataArr = [];
async function getData() {
  axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: `${baseUrl}get-data`,
  })
    .then((res) => {
      res.data.data.forEach((element) => {
        dataArr.push(element);
      });
    })
    .catch((err) => console.log(err.response.message));
}

getData();

export default dataArr;
