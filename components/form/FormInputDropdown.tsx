import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  selectOptions,
  rules,
}) => {
  const generateSingleOptions = () => {
    if (selectOptions) {
      return selectOptions.map((option: any) => {
        return (
          <MenuItem key={option.value} value={option.value}>
            {option.text}
          </MenuItem>
        );
      });
    }
    return [];
  };

  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
      />
      <FormHelperText id="myhelpertext">
        Please select only one option
      </FormHelperText>
    </FormControl>
  );
};
