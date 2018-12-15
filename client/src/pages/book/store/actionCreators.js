import * as constants from "./constants";
import { fromJS } from "immutable";
import truffleContract from "truffle-contract";
import SimpleStorageContract from "../../../contracts/SimpleStorage.json";
import getWeb3 from "../../../utils/getWeb3";

const authWeb3 = (web3, accounts, contract) => ({
  type: constants.AUTH_WEB3,
  web3,
  accounts,
  contract
});

const updateStorageValue = storageValue => ({
  type: constants.UPDATE_STORAGE_VALUE,
  storageValue
});

export const authWeb3Action = () => {
  return async dispatch => {
    try {
      const web3 = await getWeb3();
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const Contract = truffleContract(SimpleStorageContract);
      Contract.setProvider(web3.currentProvider);
      const instance = await Contract.deployed();
      dispatch(authWeb3(web3, accounts, instance));
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.log(error);
    }
  };
};

export const setStorageValue = value => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const accounts = state.getIn(["book", "accounts"]);
      const contract = state.getIn(["book", "contract"]);
      console.log(accounts.get(0));
      await contract
        .set(value, { from: accounts.get(0) })
        .on("transactionHash", async function(hash) {
          const response = await contract.get();
          console.log(response);
          dispatch(updateStorageValue(response.toNumber()));
        });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getLastValue = id => {
  return async dispatch => {
    // const testState = state.getIn(["auth"]);
    // console.log(testState);
  };
};
