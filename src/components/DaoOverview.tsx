import styled from "styled-components";

import { DataIndicator, WrappedRadio } from "@daohaus/ui";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { useDaoData } from "@daohaus/moloch-v3-hooks";
import { useYeeter } from "../hooks/useYeeter";
import { useYeets } from "../hooks/useYeets";
import { OverviewCard } from "./layout/Shared";
import { YeetProfile } from "./YeetProfile";
import { YeetGoalProgress } from "./YeetGoalProgress";
import { YeetTimeBlock } from "./YeetTimeBlock";
import { YeetButton } from "./YeetButton";
import { YeetList } from "./YeetList";

const YeetsHeader = styled.div`
  width: 100%;
  text-align: right;
`;

type DaoOverviewProps = {
  daoChain: ValidNetwork;
  daoId: string;
  shamanAddress: string;
};

export const DaoOverview = ({
  daoChain,
  daoId,
  shamanAddress,
}: DaoOverviewProps) => {
  const { dao } = useDaoData({
    daoChain,
    daoId,
  });
  const { yeeter, metadata } = useYeeter({
    chainId: daoChain,
    daoId,
    shamanAddress,
  });
  const { yeets } = useYeets({
    chainId: daoChain,
    shamanAddress,
  });

  if (!dao) return null;

  return (
    <>
      {dao && (
        <>
          <OverviewCard>
            {metadata && (
              <YeetProfile
                dao={dao}
                daoChain={daoChain}
                metadata={metadata}
                shamanAddress={shamanAddress}
              />
            )}

            {yeeter && <YeetGoalProgress yeeter={yeeter} />}
            {yeeter && <YeetTimeBlock yeeter={yeeter} />}
            <YeetButton isActive={yeeter?.isActive} isFull={yeeter?.isFull} />
          </OverviewCard>
          <OverviewCard>
            <YeetsHeader>
              <div></div>
              <DataIndicator label="Total Yeets" data={yeeter?.yeetCount} />
            </YeetsHeader>
            <YeetList yeets={yeets} />
          </OverviewCard>
        </>
      )}
    </>
  );
};

export default DaoOverview;
