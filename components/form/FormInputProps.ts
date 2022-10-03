import { RegisterOptions, FieldValues } from "react-hook-form";

export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  rules?: RegisterOptions;
  setValue?: any;
  selectOptions?: any[];
  errors?: any;
}
