var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Book = artifacts.require("./Book.sol");
module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Book, 20, 500);
};
