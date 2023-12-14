import {
  DataLg,
  DataMd,
  H3,
  Link,
  ParSm,
  ParXs,
  widthQuery,
} from "@daohaus/ui";
import { MolochV3Dao } from "@daohaus/moloch-v3-data";
import { YeeterMetadata } from "../utils/types";
import { DaoProfileAvatar } from "./DaoOverview";
import { ButtonRouterLink } from "./ButtonRouterLink";
import { ValidNetwork } from "@daohaus/keychain-utils";
import styled from "styled-components";
import { Collapser } from "./Collapser";
import { ProfileButtons } from "./ProfileButtons";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  @media ${widthQuery.md} {
    justify-content: center;
    text-align: center;
  }
`;

const YeetName = styled(H3)`
  font-size: 6rem;
  font-weight: 900;
  line-height: 6rem;
  width: 65%;
  @media ${widthQuery.md} {
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const YeetProfile = ({
  dao,
  metadata,
  shamanAddress,
  daoChain,
}: {
  dao: MolochV3Dao;
  metadata: YeeterMetadata;
  shamanAddress: string;
  daoChain: ValidNetwork;
}) => {
  return (
    <ProfileContainer>
      <ProfileRow>
        <DaoProfileAvatar address={shamanAddress} image={metadata.icon} />
        <YeetName>{dao.name}</YeetName>
      </ProfileRow>
      <Collapser
        title="About"
        content={
          <DetailsContainer>
            <div>
              <DataMd>Details</DataMd>
              <ParSm>{metadata.projectDetails}</ParSm>
            </div>
            <div>
              <DataMd>Mission</DataMd>

              <ParXs>{metadata.missionStatement}</ParXs>
            </div>
            <ProfileButtons daoChain={daoChain} daoId={dao.id} />
          </DetailsContainer>
        }
      />
    </ProfileContainer>
  );
};
