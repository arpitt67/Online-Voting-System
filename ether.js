
const provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;
let contract;

const contractAddress = "0xYourContractAddress";
const abi = [
  {
    "inputs": [{"internalType": "string","name": "candidate","type": "string"}],
    "name": "vote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getVotes",
    "outputs": [{"internalType": "string[]","name": "","type": "string[]"}],
    "stateMutability": "view",
    "type": "function"
  }
];

async function connectWallet() {
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  contract = new ethers.Contract(contractAddress, abi, signer);
}

async function voteCandidate(candidate) {
  const tx = await contract.vote(candidate);
  await tx.wait();
}

async function getResults() {
  const results = await contract.getVotes();
  return results;
}
