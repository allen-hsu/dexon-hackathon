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
  pagePartCount: 4, //目前總共顯示多少故事
  toggleEditor: false, //目前編輯器頁面是否打開
  currentEditorId: 0, //目前編輯哪一個故事
  updateEditorContent: "", //編輯後故事的結果
  updateAllInfo: false,
  leaderboard: [], //排行榜
  totalPartCount: 0,
  inputValue: ""
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

const updateEditorValue = (state, action) => {
  return state.merge({
    toggleEditor: action.toggleEditor
  });
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
      return state.merge({
        parts: action.parts,
        pagePartStart: action.pagePartStart
      });
    case constants.TOGGLE_EDITOR:
      let currentIndx = 0;
      if (action.currentEditorId >= 4) {
        currentIndx = action.currentEditorId % 4;
      } else {
        currentIndx = action.currentEditorId;
      }
      return state.merge({
        toggleEditor: action.toggleEditor,
        currentEditorId: currentIndx
      });
    case constants.UPDATE_EDITOR_VALUE:
      return updateEditorValue(state, action);
    case constants.UPDATE_RANK_VALUE:
      console.log("測測", action.leaderboard);
      return state.set("leaderboard", action.leaderboard);
    case constants.TOGGLE_UPDATE_INFO:
      return state.set("updateAllInfo", action.updateAllInfo);
    case constants.GET_TOTAL_PART_COUNT:
      return state.set("totalPartCount", action.totalPartCount);
    case constants.BUY_STORY_PART:
      return state.merge({
        toggleEditor: action.toggleEditor,
        updateAllInfo: action.updateAllInfo
      });
    default:
      return state;
  }
};
