import styled from "styled-components";
import {
  DataIndicator,
  Card,
  ProfileAvatar,
  widthQuery,
  ParXs,
} from "@daohaus/ui";
import {
  formatShortDateTimeFromSeconds,
  formatValueTo,
  fromWei,
  truncateAddress,
} from "@daohaus/utils";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { useDaoData } from "@daohaus/moloch-v3-hooks";
import { useYeeter } from "../hooks/useYeeter";
import { useYeets } from "../hooks/useYeets";
import { YeetsItem } from "../utils/types";
import { OverviewCard } from "./layout/Shared";
import { YeetProfile } from "./YeetProfile";
import { YeetGoalProgress } from "./YeetGoalProgress";
import { YeetTimeBlock } from "./YeetTimeBlock";
import { YeetButton } from "./YeetButton";

export const TokensCard = styled(OverviewCard)`
  padding: 2.4rem;
`;

export const DaoProfileContainer = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.card.radius};
  border: 1px ${({ theme }) => theme.secondary.step5} solid;
  background-color: ${({ theme }) => theme.secondary.step3};
  padding: 2.2rem;
  .avatar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.7rem;
    margin-bottom: 2.7rem;
    p {
      margin-right: auto;
    }
    @media ${widthQuery.xs} {
      flex-direction: column;
    }
  }
`;

export const DaoProfileAvatar = styled(ProfileAvatar)`
  width: 18rem;
  height: 18rem;
`;

export const MissingProfileCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.3rem;
`;

export const YeetList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  margin-top: 2rem;
`;

export const YeetListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const TagListContainer = styled.div`
  margin-top: 2.8rem;
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

  // yeet items - truncate the message and have a tool tip or expander for the whole thing?

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
            <DataIndicator label="Total Yeets" data={yeeter?.yeetCount} />
            <YeetList>
              {yeets &&
                yeets.length > 0 &&
                yeets.map((yeet: YeetsItem) => {
                  return (
                    <YeetListItem key={yeet.id}>
                      <ParXs>
                        {`${formatValueTo({
                          value: fromWei(yeet.amount),
                          decimals: 3,
                          format: "numberShort",
                        })} ETH`}
                      </ParXs>
                      <ParXs>{truncateAddress(yeet.contributor)}</ParXs>
                      {formatShortDateTimeFromSeconds(yeeter?.endTime)}
                      <ParXs>{yeet.message}</ParXs>
                    </YeetListItem>
                  );
                })}
            </YeetList>
          </OverviewCard>
        </>
      )}
    </>
  );
};

export default DaoOverview;
