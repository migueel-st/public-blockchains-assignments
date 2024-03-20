// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const questions = ["Can penguins fly?", "Did Chilly Willy wear a hat?", "Do penguins have feathers?", "Does pangolin mean penguin in spanish?"];
  const answers = [false, true, true, false];

  console.log("Deploying contract ...");
  const lock = await hre.ethers.deployContract("MyQuiz", [questions, answers]);
  await lock.waitForDeployment();
  console.log("Contract has been deployed :)");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
