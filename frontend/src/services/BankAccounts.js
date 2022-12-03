import axios from "axios";
import { uri } from "../config/config.js";
import handleResponse from "./handleResponse.js";

const getBankAccountsURI = `${uri}/bankAccounts`;

export const getBankAccounts = async (userObject) => {
  try {
    let uri = getBankAccountsURI.concat(userObject.user_id);
    let data = await axios.get(uri);
    return handleResponse(data);
  } catch (e) {
    console.error(e);
  }
};

const getTransactionsURI = `${uri}/accountTransactions`;

export const getScheduledTransactions = async (userObject) => {
  try {
    let uri = getTransactionsURI.concat(userObject.user_id);
    let data = await axios.get(uri);
    return handleResponse(data);
  } catch (e) {
    console.error(e);
  }
};

const getUserTransactionsURI = `${uri}/userTransactions`;

export const getUserScheduledTransactions = async (userObject) => {
  try {
    let uri = getUserTransactionsURI.concat(userObject.user_id);
    let data = await axios.get(uri);
    return handleResponse(data);
  } catch (e) {
    console.error(e);
  }
};
