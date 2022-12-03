import axios from "axios";
import { uri } from "../config/config.js";
import handleResponse from "./handleResponse.js";

const authenticationUri = `${uri}/users/login`;

export const authenticate = async (userObject) => {
  try {
    let data = await axios.post(authenticationUri, userObject);
    data = handleResponse(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};
