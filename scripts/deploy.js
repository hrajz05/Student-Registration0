const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const StudentIdentity = await hre.ethers.getContractFactory(
    "StudentIdentity"
  );
  const studentIdentityContract = await StudentIdentity.deploy();

  console.log(
    "Contract deployed to:",
    studentIdentityContract
  );
 
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
