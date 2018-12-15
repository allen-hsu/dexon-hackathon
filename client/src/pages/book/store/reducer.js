import * as constants from "./constants";
import { fromJS } from "immutable";
const defaultState = fromJS({
  storageValue: 0,
  web3: 0,
  accounts: null,
  contract: null,
  rewardPool: 0, //獎金池
  parts: [], //故事段落,
  pagePartStart: 0, //目前顯示故事段落的開始點
  pagePartCount: 1 //目前總共顯示多少故事
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
    case constants.UPDATE_REWARD_VALUE:
      return state.set("rewardPool", action.rewardPool);
    case constants.UPDATE_STORY_PART_VALUE:
      return state.set("parts", fromJS(action.parts));
    default:
      return state;
  }
};
