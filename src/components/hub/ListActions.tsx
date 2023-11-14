import { ReactNode } from "react";
import styled from "styled-components";

import { Noun } from "@daohaus/utils";
import { H1, SingleColumnLayout, useBreakpoint, widthQuery } from "@daohaus/ui";
// import SearchInput from "./SearchInput";
import { useDHConnect } from "@daohaus/connect";
import { getNetworkName } from "@daohaus/keychain-utils";

type ListActionsProps = {
  children: ReactNode;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  totalDaos: number;
  noun: Noun;
};

const ControlBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1.6rem;
  .list-toggle {
    margin-right: auto;
  }
  @media ${widthQuery.sm} {
    flex-direction: column;
  }
`;

const StyledH1 = styled(H1)`
  font-weight: 900;
`;

export const ListActions = ({
  children,
  searchTerm,
  setSearchTerm,
}: ListActionsProps) => {
  const { chainId } = useDHConnect();
  const isMobile = useBreakpoint(widthQuery.sm);

  return (
    <SingleColumnLayout>
      <ControlBarBox>
        {/* <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          totalItems={totalDaos}
          noun={noun}
          full={isMobile}
        /> */}
        <StyledH1>YEETS on {getNetworkName(chainId)}</StyledH1>
      </ControlBarBox>
      {children}
    </SingleColumnLayout>
  );
};
