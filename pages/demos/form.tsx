import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { FormProvider, useForm } from "react-hook-form";
import { FormInputDate } from "../../components/form/FormInputDate";
import { FormInputDropdown } from "../../components/form/FormInputDropdown";
import { FormInputRadio } from "../../components/form/FormInputRadio";
import { FormInputText } from "../../components/form/FormInputText";
import MuiPicker from "../../components/form/MuiPicker";

type Props = {};

interface IFormInput {
  userName: string;
  selectSize: number;
  preferences: any[];
  dateOfBirth: Date;
  selectedPet: string;
  salary: number;
  price?: number;
}
const defaultValues = {
  userName: "",
  selectSize: undefined,
  preferences: [],
  dateOfBirth: undefined,
  selectedPet: undefined,
  salary: 0,
  price: undefined,
};

const radioOptions = [
  {
    label: "Small",
    value: "1",
  },
  {
    label: "Medium",
    value: "2",
  },
  {
    label: "Large",
    value: "3",
  },
];

const FormDemo = (props: Props) => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const {
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors },
  } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);

  const selectOptions = [
    { value: "", text: "" },
    { value: "cat", text: "Cat" },
    { value: "dog", text: "Dog" },
    { value: "camel", text: "Camel" },
    { value: "elephant", text: "Elephant" },
  ];
  return (
    <Container>
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
          <FormInputText
            name="userName"
            control={control}
            label="User Name"
            errors={errors}
            rules={{ required: "please state your name" }}
          />
          <br />
          <FormInputText
            name="price"
            control={control}
            label="Price"
            errors={errors}
            rules={{ required: "Price is required" }}
          />

          <br />
          <FormInputRadio
            name="selectSize"
            control={control}
            label="Select size"
            options={radioOptions}
            rules={{ required: "please choose the right size for you" }}
          />
          <FormInputDate
            name="dateOfBirth"
            control={control}
            label="Date of Birth"
            rules={{ required: "please select your date of birth" }}
          />
          <br />
          <FormInputDropdown
            name="preferences"
            control={control}
            label="Select your pet"
            selectOptions={selectOptions}
          />
          <br />
          <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
            {" "}
            Submit{" "}
          </Button>
          <Button onClick={() => reset()} variant={"outlined"}>
            {" "}
            Reset{" "}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default FormDemo;
