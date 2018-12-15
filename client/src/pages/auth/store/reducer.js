import * as constants from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  storageValue: 0,
  web3: 0,
  accounts: null,
  contract: null
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
