require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

console.log("Arbitrum URL:", process.env.ARBITRUM_URL);
console.log("Private Key:", process.env.PRIVATE_KEY);

module.exports = {
  solidity: "0.8.24",
  networks: {
    open: {
      url: process.env.ARBITRUM_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
