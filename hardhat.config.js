/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

const {API_URL,PRIVATE_KEY,ETHERSCAN_API_KEY} =process.env

module.exports = {
  solidity: "0.8.17",
  defaultNetwork:'ropsten',
  networks:{
    hardhat:{},
    ropsten:{
      url:API_URL,
      accounts:PRIVATE_KEY
    }
  },
  etherscan:{
    apiKey:ETHERSCAN_API_KEY
  }
};
