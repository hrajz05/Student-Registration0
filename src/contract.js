import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

const contractAddress = "0x7098650872246F3d4594E0dA4a501Cd5C0a3f756";
const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "studentAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dob",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "studentID",
        type: "string",
      },
    ],
    name: "StudentRegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_studentAddress",
        type: "address",
      },
    ],
    name: "getStudent",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_dob",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_studentID",
        type: "string",
      },
    ],
    name: "registerStudent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

let web3;
let contract;

export const initWeb3 = async () => {
  const provider = await detectEthereumProvider();
  if (provider) {
    web3 = new Web3(provider);
    contract = new web3.eth.Contract(abi, contractAddress);
  } else {
    console.error("Please install MetaMask!");
  }
};

export const getContract = () => contract;
export const getWeb3 = () => web3;
