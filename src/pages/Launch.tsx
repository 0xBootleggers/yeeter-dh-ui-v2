import React from "react";
import { H2, SingleColumnLayout } from "@daohaus/ui";
import { FormBuilder } from "@daohaus/form-builder";
import { APP_FORM } from "../legos/forms";
import { AppFieldLookup } from "../legos/legoConfig";
import { useNavigate } from "react-router-dom";
import { useDHConnect } from "@daohaus/connect";

const now = () => (new Date().getTime() / 1000).toFixed();
const later = () => (new Date().getTime() / 1000 + 2419200).toFixed();

export const Launch = () => {
  const navigate = useNavigate();
  const { chainId } = useDHConnect();

  // todo: check chainId here is a valid one and pass to formbuilder
  console.log("chainId", chainId);

  const onFormComplete = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result: any
  ) => {
    console.log("result", result);
    const daoAddress = result?.data?.transaction?.daoAddress;
    navigate(`/success/${daoAddress}`);
  };
  return (
    <FormBuilder
      form={APP_FORM.SUMMON_YEETER}
      customFields={AppFieldLookup}
      targetNetwork={"0x5"}
      submitButtonText="LET'S FUUUCKING GO"
      lifeCycleFns={{
        onPollSuccess: (result) => {
          onFormComplete(result);
        },
      }}
      defaultValues={{ startTime: now(), endTime: 1700256682 }}
    />
  );
};
