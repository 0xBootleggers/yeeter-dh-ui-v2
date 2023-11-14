import { DHLayout } from "@daohaus/connect";
import { Footer, H4 } from "@daohaus/ui";
import { Outlet, useLocation } from "react-router-dom";

export const HomeContainer = () => {
  const location = useLocation();

  return (
    <DHLayout
      leftNav={<H4>Yeeter</H4>}
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
