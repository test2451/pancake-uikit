import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import OkexChain from "./icons/OkexChain";
import { Config } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "injected",
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: "injected",
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: "injected",
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: "injected",
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: "walletconnect",
  },
  {
    title: "Okex Chain Wallet",
    icon: OkexChain,
    connectorId: "bsc",
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
