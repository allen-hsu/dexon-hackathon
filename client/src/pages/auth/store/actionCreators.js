import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";
import truffleContract from "truffle-contract";
import SimpleStorageContract from "../../../sourceLoader";
// import SimpleStorageContract from "../../../contracts/SimpleStrong.json";
// const changeDetail = (title, content) => ({
//   type: constants.CHANGE_DETAIL,
//   title,
//   content
// });

const authWeb3 = (web3, accounts, contract) => ({
  type: constants.AUTH_WEB3,
  web3,
  accounts,
  contract
});

export const authWeb3Action = getWeb3 => {
  return async dispatch => {
    console.log(SimpleStorageContract);
    // try {
    //   const web3 = await getWeb3;
    //   // Use web3 to get the user's accounts.
    //   const accounts = await web3.eth.getAccounts();
    //   // Get the contract instance.
    //   const Contract = truffleContract(SimpleStorageContract);
    //   Contract.setProvider(web3.currentProvider);
    //   const instance = await Contract.deployed();
    //   dispatch(authWeb3(web3, accounts, instance));
    // } catch (error) {
    //   // Catch any errors for any of the above operations.
    //   console.log(error);
    // }
  };
};
