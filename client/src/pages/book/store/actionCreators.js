import * as constants from "./constants";
import { fromJS } from "immutable";
import truffleContract from "truffle-contract";
import BookContract from "../../../contracts/Book.json";
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

const updateReward = rewardPool => ({
  type: constants.UPDATE_REWARD_VALUE,
  rewardPool
});

const updateTotlaPartCount = totalPartCount => ({
  type: constants.GET_TOTAL_PART_COUNT,
  totalPartCount
});

const updateStoryPart = (parts, currentIndex) => ({
  type: constants.UPDATE_STORY_PART_VALUE,
  parts,
  pagePartStart: currentIndex
});

const updateRank = rank => ({
  type: constants.UPDATE_RANK_VALUE,
  leaderboard: rank
});

const toggleEditorValue = (currentEditorId, toggleEditor) => ({
  type: constants.TOGGLE_EDITOR,
  currentEditorId,
  toggleEditor
});

const updateEditorValue = (currentEditorId, updateEditorContent) => ({
  type: constants.UPDATE_EDITOR_VALUE,
  currentEditorId,
  updateEditorContent,
  toggleEditor: false
});

const buyStorySuccess = () => ({
  type: constants.BUY_STORY_PART,
  updateAllInfo: true
});

const toggleUpdateInfo = value => ({
  type: constants.TOGGLE_UPDATE_INFO,
  updateAllInfo: value
});

export const authWeb3Action = () => {
  return async dispatch => {
    try {
      const web3 = await getWeb3();
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      const Contract = truffleContract(BookContract);
      Contract.setProvider(web3.currentProvider);
      const instance = await Contract.deployed();
      dispatch(authWeb3(web3, accounts, instance));
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.log(error);
    }
  };
};

export const closeUpdateInfo = () => {
  return async (dispatch, getState) => {
    dispatch(toggleUpdateInfo(false));
  };
};

export const buyStoryPart = (partId, color, font, content, nextValue) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const accounts = state.getIn(["book", "accounts"]);
      const contract = state.getIn(["book", "contract"]);
      console.log(accounts.get(0));
      console.log("購買id : " + partId);
      console.log("購買顏色 : " + color);
      console.log("購買字型 : " + font);
      console.log("購買內容 : " + content);
      console.log("購買價錢 : " + nextValue);
      contract
        .buyStoryPart(partId, color, font, content, {
          from: accounts.get(0),
          value: nextValue
        })
        .on("transactionHash", async function(hash) {
          console.log("購買成功");
          dispatch(toggleUpdateInfo(true));
        })
        .on("confirmation", function(confirmationNumber, receipt) {
          console.log("購買 confirmation");
        })
        .on("receipt", function(receipt) {
          console.log("購買 receipt");
        });
    } catch (error) {
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

export const toggleEditor = (id, value) => {
  return (dispatch, getState) => {
    dispatch(toggleEditorValue(id, value));
  };
};

export const updateEditor = (id, content) => {
  return (dispatch, getState) => {
    dispatch(updateEditorValue(id, content));
  };
};

export const getCurrentReward = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const accounts = state.getIn(["book", "accounts"]);
      const contract = state.getIn(["book", "contract"]);
      const response = await contract.rewardPool();
      dispatch(updateReward(Number(response.toString())));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getStoryCount = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const contract = state.getIn(["book", "contract"]);
      const response = await contract.getStoryPartCount();
      const storyCount = response.toNumber();
      console.log(storyCount);
      dispatch(updateTotlaPartCount(storyCount));
    } catch (error) {}
  };
};
export const getStoryPart = (start, count) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const contract = state.getIn(["book", "contract"]);
      const response = await contract.getStoryPartCount();
      const storyCount = response.toNumber();
      const end = start + count;
      if (end > storyCount) {
        console.log("出錯了喔");
      } else {
        const partList = [];
        for (let i = start; i < end; i++) {
          const response = await contract.parts(i);

          const partInfo = {
            id: response.id.toNumber(),
            author: response.author.toString(),
            currentValue: Number(response.currentValue.toString()),
            color: response.color.toNumber(),
            font: response.font.toNumber(),
            content: response.content.toString(),
            nextValue: Number(response.currentValue.toString()) * 1.5
          };

          partList.push(partInfo);
        }
        console.log("更新的partList :" + partList);
        dispatch(updateStoryPart(partList, start));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRank = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const contract = state.getIn(["book", "contract"]);
      // const response = await contract.getStoryPartCount();
      // const rankCount = response.toNumber();
      const rankCount = 0;
      const rankList = [];
      for (let i = 0; i < rankCount; i++) {
        // const response = await contract.leaderboard(i);
        // console.log(response);
        // const partInfo = {
        //   id: response.id.toNumber(),
        //   author: response.author.toString(),
        //   currentValue: Number(response.currentValue.toString()),
        //   color: response.color.toNumber(),
        //   font: response.font.toNumber(),
        //   content: response.content.toString(),
        //   nextValue: Number(response.currentValue.toString()) * 1.5
        // };

        // partList.push(partInfo);
        const rankInfo = {};
        rankList.push(rankList);
      }
      dispatch(updateRank(rankList));

      // if (start + count > storyCount) {
      //   console.log("出錯了喔");
      // } else {
      //   const partList = [];
      //   for (let i = start; i < count; i++) {
      //     const response = await contract.parts(i);

      //     const partInfo = {
      //       id: response.id.toNumber(),
      //       author: response.author.toString(),
      //       currentValue: Number(response.currentValue.toString()),
      //       color: response.color.toNumber(),
      //       font: response.font.toNumber(),
      //       content: response.content.toString(),
      //       nextValue: Number(response.currentValue.toString()) * 1.5
      //     };

      //     partList.push(partInfo);
      //   }
      //   dispatch(updateStoryPart(partList));
      // }
    } catch (error) {
      console.log(error);
    }
  };
};
