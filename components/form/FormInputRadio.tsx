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

const options = [
  {
    label: "Radio Option 1",
    value: "1",
  },
  {
    label: "Radio Option 2",
    value: "2",
  },
];

export const FormInputRadio: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  rules,
}) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        key={singleOption.value}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
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
