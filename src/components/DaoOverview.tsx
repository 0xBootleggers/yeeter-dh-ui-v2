import styled from "styled-components";
import {
  DataIndicator,
  H4,
  SingleColumnLayout,
  Card,
  ProfileAvatar,
  widthQuery,
  H3,
  ParSm,
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
import { ButtonRouterLink } from "./ButtonRouterLink";
import { YeetsItem } from "../utils/types";

export const OverviewCard = styled(Card)`
  width: 64rem;
  padding: 2rem;
  border: none;
  margin-bottom: 3.4rem;
  @media ${widthQuery.md} {
    max-width: 100%;
    min-width: 0;
  }
`;

export const TokensCard = styled(OverviewCard)`
  padding: 2.4rem;
`;

export const DataGrid = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    padding: 2rem 0;
  }
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
  gap: 1rem;
  margin-bottom: 2rem;
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

  return (
    <SingleColumnLayout>
      {dao && (
        <>
          <OverviewCard>
            <div>
              <H3>{dao.name}</H3>
              <ParSm>{metadata?.projectDetails}</ParSm>

              <DaoProfileAvatar
                address={shamanAddress}
                image={metadata?.icon}
              />
              <ParXs>{metadata?.missionStatement}</ParXs>
              <ButtonRouterLink to="update" variant="link" size="sm">
                Edit Yeet Details
              </ButtonRouterLink>
            </div>
            <DataGrid>
              <DataIndicator label="Total Yeets" data={yeeter?.yeetCount} />
              <DataIndicator
                label="Total Raised"
                data={`${
                  yeeter?.balance
                    ? formatValueTo({
                        value: fromWei(yeeter.balance),
                        decimals: 3,
                        format: "numberShort",
                      })
                    : "0"
                } ETH`}
              />
              <DataIndicator
                label="Goal"
                data={`${
                  yeeter?.balance
                    ? formatValueTo({
                        value: fromWei(yeeter.maxTarget),
                        decimals: 3,
                        format: "numberShort",
                      })
                    : "0"
                } ETH`}
              />
            </DataGrid>
            <DataGrid>
              <DataIndicator
                label="Yeet Starts"
                data={formatShortDateTimeFromSeconds(yeeter?.startTime)}
              />
              <DataIndicator
                label="Yeet Ends"
                data={formatShortDateTimeFromSeconds(yeeter?.endTime)}
              />
            </DataGrid>
          </OverviewCard>
          <OverviewCard>
            {yeets &&
              yeets.length > 0 &&
              yeets.map((yeet: YeetsItem) => {
                return (
                  <YeetList>
                    <YeetListItem>
                      <ParXs>
                        {`${formatValueTo({
                          value: fromWei(yeet.amount),
                          decimals: 3,
                          format: "numberShort",
                        })} ETH`}
                      </ParXs>
                      <ParXs>{truncateAddress(yeet.contributor)}</ParXs>
                      {formatShortDateTimeFromSeconds(yeeter?.endTime)}
                    </YeetListItem>
                    <ParXs>{yeet.message}</ParXs>
                  </YeetList>
                );
              })}
          </OverviewCard>
        </>
      )}
    </SingleColumnLayout>
  );
};

export default DaoOverview;
