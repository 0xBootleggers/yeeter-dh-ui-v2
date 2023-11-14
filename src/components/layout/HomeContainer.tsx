import { DHLayout } from "@daohaus/connect";
import { Footer, H4 } from "@daohaus/ui";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledH4 = styled(H4)`
  font-weight: 900;
  font-size: 4rem;
`;

export const HomeContainer = () => {
  const location = useLocation();

  return (
    <DHLayout
      leftNav={<StyledH4>YEETER</StyledH4>}
      pathname={location.pathname}
      navLinks={[
        { label: "Home", href: `/` },
        { label: "Explore", href: `/explore` },
        { label: "Launch", href: `/launch` },
        { label: "WTF", href: `/wtf` },
      ]}
      footer={<Footer />}
    >
      <Outlet />
    </DHLayout>
  );
};
