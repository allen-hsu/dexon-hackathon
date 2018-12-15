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

const updateStoryPart = parts => ({
  type: constants.UPDATE_STORY_PART_VALUE,
  parts
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

export const getCurrentReward = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const accounts = state.getIn(["book", "accounts"]);
      const contract = state.getIn(["book", "contract"]);
      const response = await contract.rewardPool();
      dispatch(updateReward(response.toNumber()));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getStoryPart = (start, count) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const contract = state.getIn(["book", "contract"]);
      const response = await contract.getStoryPartCount();
      const storyCount = response.toNumber();

      if (start + count > storyCount) {
        console.log("出錯了喔");
      } else {
        const partList = [];
        for (let i = start; i < count; i++) {
          const response = await contract.parts(i);

          const partInfo = {
            id: response.id.toNumber(),
            author: response.author.toString(),
            currentValue: Number(response.currentValue.toString()),
            color: response.color.toNumber(),
            font: response.font.toNumber(),
            content: response.content.toString()
          };

          partList.push(partInfo);
        }
        dispatch(updateStoryPart(partList));
        console.log(partList);
      }
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
