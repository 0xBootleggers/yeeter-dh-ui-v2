import { HomeDashboard } from "../components/hub/HomeDashboard";
import { useConnect } from "@daohaus/connect-context";
import { DEFAULT_CHAIN_ID } from "../utils/constants";

export const Explore = () => {
  const { chainId } = useConnect();
  return <HomeDashboard chainId={chainId || DEFAULT_CHAIN_ID} />;
};
