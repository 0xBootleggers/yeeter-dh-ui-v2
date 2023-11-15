import { useMemo } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

import { Buildable, Field, WrappedTextArea } from "@daohaus/ui";
import { isArray, isEthAddress, isString } from "@daohaus/utils";

const VAL_MSG = {
  formattingError:
    "Incorrect formatting. Check formatting rules in tooltip above.",
  ADDRESS_ERR:
    "Member addresses are required and must be valid Ethereum addresses. Check formatting rules in tooltip above.",
};

export const validateAddressesData = (
  addresses: Record<string, string[]> | ""
) => {
  if (addresses === "") return true;
  if (!isArray(addresses)) return VAL_MSG.formattingError;

  if (!addresses.every((address) => isEthAddress(address)))
    return VAL_MSG.ADDRESS_ERR;
  return true;
};

export const transformAddressesData = (response: string | undefined) => {
  if (!isString(response) || response === "") return "";
  return response
    .split(/[\n|,]/)
    .map((str) => str.trim())
    .filter(Boolean);
};

export const MembersInput = (props: Buildable<Field>) => {
  const { watch } = useFormContext();

  const membersField = watch("members");

  const validFieldMsg = useMemo(() => {
    if (membersField === "" || !membersField) {
      return undefined;
    }
    if (validateAddressesData(membersField)) {
      return "Formatting is valid.";
    }
    return undefined;
  }, [membersField]);

  const newRules: RegisterOptions = {
    ...props.rules,
    setValueAs: transformAddressesData,
    validate: validateAddressesData,
  };

  return (
    <WrappedTextArea
      {...props}
      placeholder="0x00000000000000000000000000"
      rules={newRules}
      helperText={validFieldMsg}
    />
  );
};
