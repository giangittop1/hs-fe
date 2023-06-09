import axios from "axios";
import { API_URL } from "../config";
import Cookies from "js-cookie"

const getDataApi = async (deviceId) => {
  const res = await axios({
    url: API_URL + "/api/v1/data/"+ deviceId || "",
    method: "get",
    headers: {
        "Authorization": "Bearer "+ Cookies.get("accessToken")
    }
  });
  const result = await res.data;
  return result;
};

export default getDataApi;
