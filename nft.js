import { ethers } from "ethers";
import { getProvider } from "./web3.js";

const contractAddress = "0xYourNFTContract";
const abi = [];

export async function mintNFT() {
  const provider = getProvider();
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const tx = await contract.mint();
  const receipt = await tx.wait();
  return receipt.transactionHash;
}
