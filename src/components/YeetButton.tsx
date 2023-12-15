import styled from "styled-components";
import { ButtonRouterLink } from "./ButtonRouterLink";
import { DataXs } from "@daohaus/ui";

const ButtonContainer = styled.div`
  margin-top: 3rem;
`;

export const YeetButton = ({
  isActive,
  isFull,
}: {
  isActive?: boolean;
  isFull?: boolean;
}) => {
  return (
    <ButtonContainer>
      {isActive && (
        <>
          <ButtonRouterLink
            to="yeet"
            size="lg"
            fullWidth={true}
            disabled={isFull}
          >
            YEET!
          </ButtonRouterLink>
          {isFull && <DataXs color="green">Raise is complete</DataXs>}
        </>
      )}
    </ButtonContainer>
  );
};
