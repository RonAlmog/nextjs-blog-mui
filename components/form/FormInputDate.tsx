import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
const DATE_FORMAT = "dd-MMM-yy";

export const FormInputDate = ({ name, control, label }: FormInputProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  console.log({ selectedDate });
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <Stack spacing={4} sx={{ width: "250px" }}>
            <DatePicker
              label={label}
              renderInput={(params) => <TextField {...params} />}
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
              }}
            />
          </Stack>
        )}
      />
    </LocalizationProvider>
  );
};
