import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { FormProvider, useForm } from "react-hook-form";
import { FormInputDate } from "../../components/form/FormInputDate";
import { FormInputRadio } from "../../components/form/FormInputRadio";
import { FormInputText } from "../../components/form/FormInputText";
import MuiPicker from "../../components/form/MuiPicker";

type Props = {};

interface IFormInput {
  userName: string;
  agreeToTerms: string;
  preferences: string[];
  dateOfBirth: Date;
  selectedPet: string;
  salary: number;
}
const defaultValues = {
  userName: "johny",
  agreeToTerms: "true",
  preferences: [],
  dateOfBirth: new Date(),
  selectedPet: "dog",
  salary: 100,
};

const FormDemo = (props: Props) => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h6"> Form Demo</Typography>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText name="useName" control={control} label="User Name" />
        <FormInputRadio
          name="agreeToTerms"
          control={control}
          label="Agree to Terms"
        />
        {/* <FormInputDate
          name="dateOfBirth"
          control={control}
          label="Date of Birth"
        /> */}
        <MuiPicker />
      </form>
    </Paper>
  );
};

export default FormDemo;
