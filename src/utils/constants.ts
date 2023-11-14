import {
  HAUS_NETWORK_DATA,
  Keychain,
  NetworkConfig,
  ValidNetwork,
  isValidNetwork,
} from "@daohaus/keychain-utils";

type KEYCHAIN = {
  [key: string]: string;
};

export const GRAPH_URL: KEYCHAIN = {
  "0x5":
    "https://api.thegraph.com/subgraphs/name/odyssy-automaton/yeeter-dh-ui-v2",
};

export const YEETER_DAO_REFERRER = "DHOnboarderShamanSummoner";

export const targetNetworks: Keychain<NetworkConfig> = {
  "0x5": HAUS_NETWORK_DATA["0x5"],
};

export const DEFAULT_CHAIN_ID = "0x5";

export const getValidChainId = (chainId?: string) => {
  return targetNetworks[chainId as ValidNetwork]?.chainId || DEFAULT_CHAIN_ID;
};
