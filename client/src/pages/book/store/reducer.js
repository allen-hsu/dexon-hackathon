import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  storageValue: 0,
  web3: 0,
  accounts: null,
  contract: null
});

const authWeb3 = (state, action) => {
  return state.merge({
    web3: fromJS(action.web3),
    accounts: fromJS(action.accounts),
    contract: fromJS(action.contract)
  });
};

const updateStorageValue = (state, action) => {
  return state.set("storageValue", action.storageValue);
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.AUTH_WEB3:
      return authWeb3(state, action);
    case constants.UPDATE_STORAGE_VALUE:
      return updateStorageValue(state, action);
    default:
      return state;
  }
};
