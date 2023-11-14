import styled from "styled-components";

import { charLimit, readableNumbers, toWholeUnits } from "@daohaus/utils";
import { getNetworkName } from "@daohaus/keychain-utils";
import { MolochV3Membership } from "@daohaus/utils";
import {
  Badge,
  Bold,
  ParLg,
  ParMd,
  ProfileAvatar,
  Tag,
  Tooltip,
} from "@daohaus/ui";
import { ButtonRouterLink } from "../ButtonRouterLink";
import { ListDaosQueryResDaos } from "@daohaus/moloch-v3-data";
import { useDHConnect } from "@daohaus/connect";
import { YeeterItem } from "../../utils/types";
import { useDaoData } from "@daohaus/moloch-v3-hooks";

const StyledDaoCard = styled.div`
  background-color: ${(props) => props.theme.secondary.step2};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 34rem;
  min-width: 26rem;
  border: 1px solid ${(props) => props.theme.secondary.step5};
  padding: 2.4rem;
  border-radius: ${(props) => props.theme.card.radius};
  .top-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.3rem;
  }

  .badge {
    transform: translateX(-0.8rem);
  }
  .stats-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.4rem;
    p {
      margin-bottom: 0.6rem;
    }
  }
  .tag-box {
    font-size: 1.4rem;
    margin-bottom: 2.4rem;
    div {
      margin-right: 1.5rem;
    }
  }
`;

export const DaoCard = ({
  yeeter,
  chainId,
}: {
  yeeter: YeeterItem;
  chainId: string;
}) => {
  const { dao } = useDaoData({ daoChain: chainId, daoId: yeeter.dao.id });
  return (
    <StyledDaoCard className="dao-card">
      <div className="top-box">
        <div className="alert-box">
          <ProfileAvatar size="xl" address={dao?.id} image={dao?.avatarImg} />
        </div>
      </div>
      <ParLg className="dao-title">
        {dao?.name ? charLimit(dao.name, 21) : charLimit(yeeter.id, 21)}{" "}
      </ParLg>
      <div className="stats-box">
        <ParMd>
          <Bold>{toWholeUnits(yeeter.balance)} Eth Raised</Bold>{" "}
        </ParMd>
      </div>
      <div className="tag-box">
        <Tag tagColor="red">{getNetworkName(chainId)}</Tag>
      </div>
      <ButtonRouterLink
        color="secondary"
        fullWidth
        to={`/molochv3/${chainId}/${yeeter.id}`}
      >
        Go
      </ButtonRouterLink>
    </StyledDaoCard>
  );
};
