import { useEffect } from "react";
import {
  Routes as Router,
  Route,
  useLocation,
  matchPath,
} from "react-router-dom";

import { ReactSetter } from "@daohaus/utils";
import { MULTI_DAO_ROUTER } from "@daohaus/moloch-v3-hooks";

import Dao from "./pages/Dao";
import { Home } from "./pages/Home";
import { TARGET_DAO } from "./targetDao";
import { HomeContainer } from "./components/layout/HomeContainer";
import { DaoContainer } from "./components/layout/DaoContainer";
import UpdateSettings from "./pages/UpdateSettings";
import { Explore } from "./pages/Explore";
import { Launch } from "./pages/Launch";
import { Yeet } from "./pages/Yeet";
import { Wtf } from "./pages/Wtf";

export const Routes = ({
  setDaoChainId,
}: {
  setDaoChainId: ReactSetter<string | undefined>;
}) => {
  const location = useLocation();
  const pathMatch = matchPath("molochv3/:daochain/:daoid/*", location.pathname);

  useEffect(() => {
    if (TARGET_DAO[import.meta.env.VITE_TARGET_KEY]?.CHAIN_ID) {
      setDaoChainId(TARGET_DAO[import.meta.env.VITE_TARGET_KEY].CHAIN_ID);
    }
    if (pathMatch?.params?.daochain) {
      setDaoChainId(pathMatch?.params?.daochain);
    }
    if (!pathMatch?.params?.daochain) {
      setDaoChainId(undefined);
    }
  }, [pathMatch?.params?.daochain, setDaoChainId]);

  return (
    <Router>
      <Route path="/" element={<HomeContainer />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="launch" element={<Launch />} />
        <Route path="wtf" element={<Wtf />} />
      </Route>
      <Route path={MULTI_DAO_ROUTER} element={<DaoContainer />}>
        <Route index element={<Dao />} />
        <Route path="yeet" element={<Yeet />} />
        <Route path="update" element={<UpdateSettings />} />
      </Route>
    </Router>
  );
};
