import { useState } from "react";
import styled from "styled-components";

import { H2, Loading, useBreakpoint, widthQuery } from "@daohaus/ui";
import { ListActions } from "./ListActions";
import { DaoList } from "./DaoList";
import { useYeeters } from "../../hooks/useYeeters";

export enum ListType {
  Cards,
  Table,
}

export const HomeDashboard = ({ chainId }: { chainId: string }) => {
  const isMobile = useBreakpoint(widthQuery.sm);
  const [searchTerm, setSearchTerm] = useState<string | "">("");

  const { yeeters, isLoading, isError } = useYeeters({ chainId });

  const tableControlProps = {
    setSearchTerm,
    searchTerm,
    totalDaos: yeeters?.length,
    noun: {
      singular: "DAO",
      plural: "DAOs",
    },
  };

  if (!yeeters?.length || isError) {
    return (
      <ListActions {...tableControlProps}>
        <NoDaosFound />
      </ListActions>
    );
  }
  if (isLoading) {
    return (
      <ListActions {...tableControlProps}>
        <LoadingContainer isMobile={isMobile} />
      </ListActions>
    );
  }
  return (
    <ListActions {...tableControlProps}>
      <DaoList daoData={yeeters} />
    </ListActions>
  );
};

const CenterFrame = styled.div`
  height: 30rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    position: absolute;
  }
`;

const LoadingContainer = ({ isMobile }: { isMobile: boolean }) => (
  <CenterFrame>
    <div className="inner">
      <Loading size={isMobile ? 80 : 160} />
    </div>
  </CenterFrame>
);
const NoDaosFound = () => (
  <CenterFrame>
    <H2>No Daos Found</H2>
  </CenterFrame>
);
