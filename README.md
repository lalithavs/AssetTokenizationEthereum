# Employee Rewards Token

## Asset Tokenization

In general terms, the tokenization of assets refers to the process of issuing a blockchain token that digitally represents a real traceable asset. These blockchain tokens can then be traded on a secondary market.

These digital tokens can include unique hash values which could represent
• Share in a company  
• Ownership of a piece of real estate  
• Precious metals, stones etc.
• Financial instruments, equity, bonds, fund units, etc.
• Gift cards, vouchers etc.

There are two types of assets:
1.  Fungible assets
2.  Non-fungible assets

## Project Scope

This project primarily deals with fungible assets. There are a wide variety of fungible assets like cryptocurrencies, land registry, company shares, gift cards, meal vouchers etc.

This project is designed for a specific use case which is **Employee Rewards Tokens**.

That being said, this project can serve as a template for any fungible assets as ERC20 implementation by OpenZeppelin will be used as a base for building smart contracts. This project can adapt to other fungible assets by appropriate modification of UI and smart contracts.

## Employee Rewards Tokens

There will be two types of users:
 - Employer will be
	 - The owner of the initial supply of tokens.
	 - Having a list of all account numbers of employees.
	 - Able to send tokens to the employees, on the basis of the performance of the employees.
 - Employees will be
	 - Able to view their current account balance.
	 - Able to spend their tokens in exchange of some real-world objects, for example buying a meal.

## Ropsten Network Deployment Address
The smart contract has already been deployed to Ropsten network at address: *`0xFECd75605bd564616176A852C39c8a943EcC02fA`*.

Check https://ropsten.etherscan.io/address/0xfecd75605bd564616176a852c39c8a943ecc02fa for more details.

## Setting Up

**Step1:** Download the repository.

**Step 2:** Goto the project folder and install all the dependencies using the command: 

    npm install
**Step 3:** Use the following command to compile smart contract:

    truffle compile
**Step 4:** Open Ganache (either GUI or CLI).

**Step 5:** Use the following command to deploy the smart contract:

    truffle migrate
**Step 6:** Run the DApp using the following:

    npm start

> Note: ``nodemon ./bin/www`` has been used in `npm start` script.
> Please change the same to ``node ./bin/www`` in package.json file if
> `nodemon` is not installed in your system.

**Step 7:** Open the browser and goto http://localhost:3000 to start using the DApp.