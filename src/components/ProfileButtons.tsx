import styled from "styled-components";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { ButtonRouterLink } from "./ButtonRouterLink";
import { Link } from "@daohaus/ui";

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4rem;
  margin-top: 1rem;
`;

export const ProfileButtons = ({
  daoChain,
  daoId,
}: {
  daoChain: ValidNetwork;
  daoId: string;
}) => {
  const isMember = true;

  return (
    <>
      <ButtonRow>
        <Link
          href={`https://admin.daohaus.club/#/molochv3/${daoChain}/${daoId}`}
          type="external"
        >
          DAO Admin
        </Link>
        {isMember && (
          <ButtonRouterLink to="update" variant="link" size="md">
            Edit Yeet Details
          </ButtonRouterLink>
        )}
      </ButtonRow>
    </>
  );
};
