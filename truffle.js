const path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");
var secret = require("./secret");
var mnemonic = secret.mnemonic;
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    dexon: {
      provider: new HDWalletProvider(mnemonic, "http://testnet.dexon.org:8545"),
      network_id: "*",
      gas: 4712388
    },
    development: {
      network_id: "*",
      host: "localhost",
      port: 7545,
      from: "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
      gas: 4712388
    }
  }
};
