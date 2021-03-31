var EmployeeRewards = artifacts.require("EmployeeRewards");

module.exports = async function (deployer) {
  let addr = await web3.eth.getAccounts();
  await deployer.deploy(EmployeeRewards);
};
