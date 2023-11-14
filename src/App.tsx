import { DHConnectProvider } from "@daohaus/connect";
import { useState } from "react";
import { Routes } from "./Routes";
import { HAUS_NETWORK_DATA } from "@daohaus/keychain-utils";

const targetNetworks = { "0x5": HAUS_NETWORK_DATA["0x5"] };

export const App = () => {
  const [daoChainId, setDaoChainId] = useState<string | undefined>();

  return (
    <DHConnectProvider daoChainId={daoChainId} networks={targetNetworks}>
      <Routes setDaoChainId={setDaoChainId} />
    </DHConnectProvider>
  );
};
