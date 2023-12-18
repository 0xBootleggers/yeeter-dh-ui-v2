import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { FormBuilder } from "@daohaus/form-builder";
import { useCurrentDao, useDaoData } from "@daohaus/moloch-v3-hooks";

import { AppFieldLookup } from "../legos/legoConfig";
import { APP_FORM } from "../legos/forms";
import { useYeeter } from "../hooks/useYeeter";
import { useCurrentYeeter } from "../contexts/CurrentYeeterContext";
import { ValidNetwork } from "@daohaus/keychain-utils";

const UpdateSettings = () => {
  const { dao, refetch } = useDaoData();
  const { daoId, daoChain } = useCurrentDao();
  const { shamanAddress } = useCurrentYeeter();

  if (!dao || !daoChain || !shamanAddress || !daoId) {
    return null;
  }

  return (
    <SettingsForm
      daoChain={daoChain}
      shamanAddress={shamanAddress}
      daoId={daoId}
      refetch={refetch}
    />
  );
};

const SettingsForm = ({
  daoChain,
  daoId,
  shamanAddress,
  refetch,
}: {
  daoChain: ValidNetwork;
  daoId: string;
  shamanAddress: string;
  refetch: () => void;
}) => {
  const { metadata } = useYeeter({ chainId: daoChain, shamanAddress, daoId });
  const navigate = useNavigate();

  const onFormComplete = () => {
    refetch?.();
    navigate(`/molochV3/${daoChain}/${daoId}`);
  };
  return (
    <FormBuilder
      defaultValues={metadata}
      form={APP_FORM.METADATA_SETTINGS}
      customFields={AppFieldLookup}
      targetNetwork={daoChain}
      lifeCycleFns={{
        onPollSuccess: () => {
          onFormComplete();
        },
      }}
    />
  );
};

export default UpdateSettings;
