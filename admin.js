
async function connectWallet() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  return new ethers.Contract("0xYourContractAddress", abi, signer);
}

async function endVoting() {
  const contract = await connectWallet();
  const tx = await contract.endVote();
  await tx.wait();
}

async function addCandidate(name) {
  const contract = await connectWallet();
  const tx = await contract.addCandidate(name);
  await tx.wait();
}
