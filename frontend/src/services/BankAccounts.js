import axios from "axios";
import { uri } from "../config/config.js";
import handleResponse from "./handleResponse.js";

const getBankAccountsURI = `${uri}/bankAccounts/`;

export const getBankAccounts = async (userId) => {
  try {
    console.log(userId);
    const userIdNum = userId;
    const userIdString = userIdNum.toString();
    let uri = getUserTransactionsURI.concat(userIdString);
    let data = await axios.get(uri);
    return handleResponse(data);
  } catch (e) {
    console.error(e);
  }
};

const getTransactionsURI = `${uri}/accountTransactions/`;

export const getScheduledTransactions = async (userId) => {
  try {
    const userIdString = userId.toString();
    let uri = getUserTransactionsURI.concat(userIdString);
    let data = await axios.get(uri);
    return handleResponse(data);
  } catch (e) {
    console.error(e);
  }
};

const getUserTransactionsURI = `${uri}/userTransactions/`;

export const getUserScheduledTransactions = async (userId) => {
  try {
    const userIdString = userId.toString();
    let uri = getUserTransactionsURI.concat(userIdString);
    let data = await axios.get(uri);
    return handleResponse(data);
  } catch (e) {
    console.error(e);
  }
};
