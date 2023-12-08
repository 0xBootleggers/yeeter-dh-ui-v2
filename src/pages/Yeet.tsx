import { FormBuilder } from "@daohaus/form-builder";
import { MolochFields } from "@daohaus/moloch-v3-fields";

import { APP_FORM } from "../legos/forms";
import { AppFieldLookup } from "../legos/legoConfig";
import { useCurrentDao, useDaoData } from "@daohaus/moloch-v3-hooks";
import { useYeeter } from "../hooks/useYeeter";

export const Yeet = () => {
  const { daoChain } = useCurrentDao();
  const { dao } = useDaoData();
  // const {} = useYeeter();

  console.log("dao", dao);

  if (!dao || !dao.shamen || !dao.shamen.length) return null;

  return <YeeterForm shamanAddress={dao.shamen[0].shamanAddress} />;
};

const YeeterForm = ({ shamanAddress }: { shamanAddress: string }) => {
  const { daoChain } = useCurrentDao();

  return (
    <FormBuilder
      form={APP_FORM.YEET_FORM}
      targetNetwork={daoChain}
      customFields={{ ...MolochFields, ...AppFieldLookup }}
      defaultValues={{ shamanAddress }}
    />
  );
};
