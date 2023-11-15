import { HomeDashboard } from "../components/hub/HomeDashboard";
import { useConnect } from "@daohaus/connect-context";
import { DEFAULT_CHAIN_ID } from "../utils/constants";

export const Explore = () => {
  const { chainId } = useConnect();

  console.log("chainId", chainId);
  // todo: pass connected chain when multichain and handle wrong chain
  return <HomeDashboard chainId={DEFAULT_CHAIN_ID} />;
};
