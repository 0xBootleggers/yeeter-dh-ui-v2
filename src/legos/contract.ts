import { ContractLego } from "@daohaus/utils";

import yeeterSummonerAbi from "../abis/yeeterSummoner.json";
import yeeterShamanAbi from "../abis/yeeterShaman.json";
import { YEETER_CONTRACTS } from "../utils/constants";

export const APP_CONTRACT: Record<string, ContractLego> = {
  YEETER_SUMMONER: {
    type: "static",
    contractName: "YeeterSummoner",
    abi: yeeterSummonerAbi,
    targetAddress: YEETER_CONTRACTS["ONBOARDER_SUMMONER"],
  },
  YEETER_SHAMAN: {
    type: "static",
    contractName: "YeeterShaman",
    abi: yeeterShamanAbi,
    targetAddress: ".formValues.shamanAddress",
  },
};
