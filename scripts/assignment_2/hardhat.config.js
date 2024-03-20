require("@nomicfoundation/hardhat-toolbox");
const path = require("path");
let pathToDotEnv = path.join(__dirname, "..", "..", ".env");
require("dotenv").config({path : pathToDotEnv});
const NOT_UNIMA_RPC_URL = process.env.NOT_UNIMA_URL_1;
const MM_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    unima: {
      url: NOT_UNIMA_RPC_URL,
      accounts: [ MM_PRIVATE_KEY ],
    }
  }
};
