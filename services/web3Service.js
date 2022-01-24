import { ethers } from "ethers";
import Web3Modal from "web3modal";

export function hasEthereum() {
  return window.ethereum ? true : false;
}

export const connectToMetaMask = async (setError) => {
  try {

    const providerOptions = {
      /* See Provider Options Section */
    };

    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });

    const instance = await web3Modal.connect();
    
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();

  } catch (error) {
    console.log(error);
    if (setError) setError(error.message ?? error.toString());
    return false;
  }
};

export function getActiveWallet() {
  if (!hasEthereum()) return false;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const address = signer.provider.provider.selectedAddress;
  return address;
}

export async function getCurrentNetwork() {
  if (!hasEthereum()) return false;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const network = (await signer.provider._networkPromise).name;
  return network;
}

export function listenToAccountChanges(handler) {
  if (!hasEthereum()) return false;

  window.ethereum.on("accountsChanged", async (accounts) => {
    handler(accounts[0]);
  });
}

export function listenToNetworkChanges(handler) {
  if (!hasEthereum()) return false;

  window.ethereum.on("chainChanged", async () => {
    const network = await getCurrentNetwork();
    if (network && network !== "rinkeby") {
      return toast.error("Please Switch to the Rinkeby Test Network");
    } else {
      toast.success("You successfully switched to the Rinkeby Test Network");
      // handler(network);
    }
  });
}

export async function unmountEthListeners() {
  window.ethereum.removeListener("chainChanged", () => {});
  window.ethereum.removeListener("accountsChanged", () => {});
  window.ethereum.removeListener("message", () => {});
}
