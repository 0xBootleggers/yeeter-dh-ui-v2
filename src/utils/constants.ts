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

export const YEETER_CONTRACTS: KeychainList = {
  ONBOARDER_SUMMONER: {
    "0x1": "",
    "0x5": "0x45a2583F50602C169D459D98761df6D48c1EB3D6",
    "0xa": "",
  },
  ETH_YEETER_SINGLETON: {
    "0x1": "",
    "0x5": "0x5bd0c8d7fba4bbdfe8dae403b995acfe8bb9ea08",
    "0xa": "",
  },
};

export const YEETER_SHAMAN_PERMISSIONS = "2";
export const DEFAULT_YEETER_VALUES = {
  // startTime: (Date.parse("01 Jan 2000") / 1000).toFixed(0),
  // endTime: (Date.parse("01 Jan 3000") / 1000).toFixed(0),
  multiplier: 100000,
  // minTribute: ethers.utils.parseEther("0.01"),
  isShares: true,
  feeRecipients: [],
  feeAmounts: [],
};
export const DEFAULT_SUMMON_VALUES = {
  votingPeriodInSeconds: 120,
  gracePeriodInSeconds: 60,
  newOffering: "0",
  quorum: "0",
  sponsorThreshold: "1000000000000000000",
  minRetention: "66",
  votingTransferable: false,
  nvTransferable: false,
  shareAmounts: [
    "1000000000000000000",
    "1000000000000000000",
    "1000000000000000000",
  ],
};
