import styled from "styled-components";

import { breakpoints } from "@daohaus/ui";

import { DaoCard } from "./DaoCard";
import { YeeterItem } from "../../utils/types";
import { useConnect } from "@daohaus/connect-context";
import { DEFAULT_CHAIN_ID } from "../../utils/constants";

export const DaoList = ({ daoData }: { daoData: YeeterItem[] }) => {
  return <DaoCards daoData={daoData} />;
};

const CardListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 2rem;
  justify-content: center;
  @media (min-width: ${breakpoints.xs}) {
    justify-content: flex-start;
  }
`;

const DaoCards = ({ daoData }: { daoData: YeeterItem[] }) => {
  // const { chainId } = useConnect();
  // console.log("chainId", chainId);
  // todo: pass connected chain when multichain and handle wrong chain

  const chainId = DEFAULT_CHAIN_ID;

  return (
    <CardListBox>
      {daoData.map((yeeter: YeeterItem) => (
        <DaoCard
          key={yeeter.id}
          yeeter={yeeter}
          chainId={chainId || DEFAULT_CHAIN_ID}
        />
      ))}
    </CardListBox>
  );
};
