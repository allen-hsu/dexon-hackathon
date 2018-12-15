var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer, network, acccount) {
  console.log(acccount);
  deployer.deploy(Migrations);
};
