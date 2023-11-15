import { useFormContext } from "react-hook-form";

import { Buildable, Field, FieldWrapper, ParLg } from "@daohaus/ui";
import { DEFAULT_YEETER_VALUES } from "../../utils/constants";
import { isNumberish, toWholeUnits } from "@daohaus/utils";

export const LootPerYeet = (props: Buildable<Field>) => {
  const { watch } = useFormContext();

  const minTribute = watch("minTribute");

  console.log("minTribute", minTribute);

  return (
    <FieldWrapper
      label={props.label}
      loading={props.loading}
      info={props.info}
      error={props.error}
      success={props.success}
      warning={props.warning}
      helperText={props.helperText}
      hidden={props.hidden}
      long={props.long}
      full={props.full}
      address={props.address}
      rightAddon={props.rightAddon}
      id={props.id}
      rules={props.rules}
    >
      <ParLg>
        {isNumberish(minTribute) &&
          // @ts-expect-error
          Number(toWholeUnits(minTribute)) * DEFAULT_YEETER_VALUES.multiplier}
      </ParLg>
    </FieldWrapper>
  );
};
