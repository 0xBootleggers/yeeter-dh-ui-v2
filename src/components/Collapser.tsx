import { ReactNode, useState } from "react";
import styled from "styled-components";

import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri/index.js";

import { Card, DataMd } from "@daohaus/ui";

export const CollapseContainer = styled(Card)`
  border: none;
  width: 100%;
  margin: 1rem 0;
`;

export const StyledUpArrow = styled(RiArrowUpSLine)`
  font-size: 3rem;
  font-weight: 900;
`;

export const StyledDownArrow = styled(RiArrowDownSLine)`
  font-size: 3rem;
  font-weight: 900;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 1rem;
`;

type CollapserProps = {
  title?: string;
  content: ReactNode;
};

export const Collapser = ({ title, content }: CollapserProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <CollapseContainer>
      <TitleContainer onClick={handleToggle}>
        {title && <DataMd> {title}</DataMd>}

        {open && (
          <div>
            <StyledUpArrow />
          </div>
        )}
        {!open && (
          <div>
            <StyledDownArrow />
          </div>
        )}
      </TitleContainer>
      {open && <Content>{content}</Content>}
    </CollapseContainer>
  );
};
