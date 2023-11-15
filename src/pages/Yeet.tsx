import { FormBuilder } from "@daohaus/form-builder";
import { MolochFields } from "@daohaus/moloch-v3-fields";

import { APP_FORM } from "../legos/forms";
import { AppFieldLookup } from "../legos/legoConfig";
import { useCurrentDao } from "@daohaus/moloch-v3-hooks";
import { useYeeter } from "../hooks/useYeeter";

export const Yeet = () => {
  const { daoChain } = useCurrentDao();
  // const {} = useYeeter();

  return (
    <FormBuilder
      form={APP_FORM.YEET_FORM}
      targetNetwork={daoChain}
      customFields={{ ...MolochFields, ...AppFieldLookup }}
    />
  );
};
