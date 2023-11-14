import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

import { handleErrorMessage } from "@daohaus/utils";
import { listDaos, ListDaosQueryResDaos } from "@daohaus/moloch-v3-data";
import {
  H2,
  Loading,
  useBreakpoint,
  useDebounce,
  widthQuery,
} from "@daohaus/ui";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { useDHConnect } from "@daohaus/connect";
import { DEFAULT_SORT_KEY, SORT_FIELDS } from "../../utils/hub";
import { ListActions } from "./ListActions";
import { DaoList } from "./DaoList";
import { useYeeters } from "../../hooks/useYeeters";

export enum ListType {
  Cards,
  Table,
}

export const HomeDashboard = ({ chainId }: { chainId: string }) => {
  const isMobile = useBreakpoint(widthQuery.sm);
  const [sortBy, setSortBy] = useState<string>(DEFAULT_SORT_KEY);
  const [searchTerm, setSearchTerm] = useState<string | "">("");

  const { yeeters, isLoading, isError } = useYeeters({ chainId });

  const switchSortBy = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const tableControlProps = {
    switchSortBy,
    setSearchTerm,
    sortBy,
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
