import styled from "styled-components";
import { ButtonRouterLink } from "./ButtonRouterLink";

const ButtonContainer = styled.div`
  margin-top: 3rem;
`;

export const YeetButton = ({ isActive }: { isActive?: boolean }) => {
  return (
    <ButtonContainer>
      {isActive && (
        <ButtonRouterLink to="yeet" size="lg" fullWidth={true}>
          YEET!
        </ButtonRouterLink>
      )}
    </ButtonContainer>
  );
};
