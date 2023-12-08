import { Outlet, useLocation, useParams } from "react-router-dom";

import { DHLayout, useDHConnect } from "@daohaus/connect";
import { TXBuilder } from "@daohaus/tx-builder";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { CurrentDaoProvider, useDaoData } from "@daohaus/moloch-v3-hooks";
import { HeaderAvatar } from "../HeaderAvatar";
import { CurrentYeeterProvider } from "../../contexts/CurrentYeeterContext";

export const DaoContainer = () => {
  const { proposalId, memberAddress, daoChain, daoId } = useParams<{
    daoChain: ValidNetwork;
    daoId: string;
    proposalId: string;
    memberAddress: string;
  }>();

  if (!daoId || !daoChain) return null;

  return (
    <Dao
      daoId={daoId}
      daoChain={daoChain}
      proposalId={proposalId}
      memberAddress={memberAddress}
    />
  );
};

const Dao = ({
  daoId,
  daoChain,
  proposalId,
  memberAddress,
}: {
  daoId: string;
  daoChain: ValidNetwork;
  proposalId?: string;
  memberAddress?: string;
}) => {
  const location = useLocation();
  const { publicClient, address } = useDHConnect();
  const { dao } = useDaoData({
    daoId: daoId as string,
    daoChain: daoChain as string,
  });

  const routePath = `molochv3/${daoChain}/${daoId}`;

  // TODO: get better shaman address

  const shamanAddress =
    dao && dao.shamen && dao.shamen.length > 0
      ? dao.shamen[0].shamanAddress
      : undefined;

  return (
    <DHLayout
      pathname={location.pathname}
      navLinks={[
        { label: "Home", href: `/` },
        { label: "Dashboard", href: `/${routePath}` },
        { label: "Yeet", href: `/${routePath}/yeet` },
      ]}
      leftNav={
        dao?.name &&
        dao?.id && (
          <HeaderAvatar
            name={dao.name}
            address={dao.id}
            imgUrl={dao?.avatarImg}
          />
        )
      }
    >
      <CurrentDaoProvider
        userAddress={address}
        targetDao={{
          daoChain: daoChain,
          daoId: daoId,
          proposalId,
          memberAddress,
        }}
      >
        <TXBuilder
          publicClient={publicClient}
          chainId={daoChain}
          daoId={daoId}
          safeId={dao?.safeAddress}
          appState={{
            dao,
            memberAddress: address,
            shamanAddress,
          }}
        >
          <CurrentYeeterProvider shamanAddress={shamanAddress}>
            <Outlet />
          </CurrentYeeterProvider>
        </TXBuilder>
      </CurrentDaoProvider>
    </DHLayout>
  );
};
