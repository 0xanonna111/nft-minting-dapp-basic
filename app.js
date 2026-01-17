import { connectWallet } from "./web3.js";
import { mintNFT } from "./nft.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
  document.getElementById("status").innerText = "Status: Wallet connected";
};

document.getElementById("mintBtn").onclick = async () => {
  const tokenId = await mintNFT();
  document.getElementById("status").innerText = "Minted Token ID: " + tokenId;
};
