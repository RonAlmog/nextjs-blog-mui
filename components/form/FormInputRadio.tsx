import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputRadio: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  rules,
  options,
}) => {
  const generateRadioOptions = () => {
    if (options) {
      return options.map((singleOption) => (
        <FormControlLabel
          key={singleOption.value}
          value={singleOption.value}
          label={singleOption.label}
          control={<Radio />}
        />
      ));
    }
    return [];
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
