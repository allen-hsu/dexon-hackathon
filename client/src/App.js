import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Book from "./pages/book";
// import GlobalStyleFont from "./statics/iconfont/iconfont";
import GlobalStyle from "./style";
import store from "./store";
import "./App.css";

class App extends Component {
  componentDidMount = async () => {
    // try {
    //   // Get network provider and web3 instance.
    //   const web3 = await getWeb3();
    //   // Use web3 to get the user's accounts.
    //   const accounts = await web3.eth.getAccounts();
    //   // Get the contract instance.
    //   console.log(SimpleStorageContract);
    //   const Contract = truffleContract(SimpleStorageContract);
    //   Contract.setProvider(web3.currentProvider);
    //   const instance = await Contract.deployed();
    //   // Set web3, accounts, and contract to the state, and then proceed with an
    //   // example of interacting with the contract's methods.
    //   this.setState({ web3, accounts, contract: instance }, this.runExample);
    //   console.log(instance);
    // } catch (error) {
    //   // Catch any errors for any of the above operations.
    //   alert(
    //     `Failed to load web3, accounts, or contract. Check console for details.`
    //   );
    //   console.log(error);
    // }
  };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   console.log(contract);
  //   await contract
  //     .set(5, { from: accounts[0] })
  //     .on("transactionHash", async function(hash) {
  //       console.log("成功測試");
  //       const response = await contract.get();
  //       console.log(response.toNumber());
  //     });
  // };

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Book} />
            </div>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
