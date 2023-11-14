import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

import {
  H2,
  Link,
  ParMd,
  SingleColumnLayout,
  LinkStyles,
  H1,
  ParLg,
} from "@daohaus/ui";

import { HausAnimated } from "../components/HausAnimated";
import { TARGET_DAO } from "../targetDao";
import { ButtonRouterLink } from "../components/ButtonRouterLink";

const LinkBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

const Contain = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const StyledH1 = styled(H1)`
  font-weight: 900;
  font-size: 10rem;
  line-height: 1;
`;

const StyledRouterLink = styled(RouterLink)`
  ${LinkStyles}
  margin-bottom: 2rem;
  font-weight: 900;
`;

const StyledH2 = styled(H2)`
  font-weight: 900;
`;

export const Home = () => {
  const hasTargetDao =
    TARGET_DAO[import.meta.env.VITE_TARGET_KEY]?.CHAIN_ID !== undefined;

  return (
    <SingleColumnLayout>
      <Contain>
        <StyledH1>YEETER IS A REVOLUTION IN WEB3 FUNDRAISING</StyledH1>
        <ParLg>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi
          lacus, dictum at ultricies et, varius ut lacus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Nulla interdum lobortis nisi, a placerat leo auctor sed. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Nam venenatis convallis est.{" "}
        </ParLg>
        <StyledRouterLink to="wtf">
          <StyledH2>WHAT THE ACTUAL FUCK?</StyledH2>
        </StyledRouterLink>
        <LinkBox>
          <ButtonRouterLink to="explore" size="lg" variant="outline">
            Explore
          </ButtonRouterLink>
          <ButtonRouterLink to="launch" size="lg" variant="outline">
            Launch
          </ButtonRouterLink>
        </LinkBox>
      </Contain>
    </SingleColumnLayout>
  );
};
