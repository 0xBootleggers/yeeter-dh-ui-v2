import { useCurrentDao } from "@daohaus/moloch-v3-hooks";
import { SingleColumnLayout } from "@daohaus/ui";
import { useCurrentYeeter } from "../contexts/CurrentYeeterContext";
import DaoOverview from "../components/DaoOverview";

export function Dao() {
  const { daoChain, daoId } = useCurrentDao();
  const { shamanAddress } = useCurrentYeeter();

  return (
    <SingleColumnLayout>
      {daoId && daoChain && shamanAddress && (
        <DaoOverview
          daoChain={daoChain}
          daoId={daoId}
          shamanAddress={shamanAddress}
        />
      )}
    </SingleColumnLayout>
  );
}

export default Dao;
