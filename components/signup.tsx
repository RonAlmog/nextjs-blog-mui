import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Link from "../src/Link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {};

const SignUp = (props: Props) => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 320,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btstyle = { margin: "8px 0" };
  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: 5 };
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email"),
    gender: Yup.boolean().required("Please select gender"),
    phoneNumber: Yup.number().typeError("Enter a valid phone number"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be 6 chars min")
      .max(20, "Password should be 20 chars max"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password does not match")
      .required("Confirm password is required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="name"
                label="Name"
                variant="standard"
                placeholder="Enter your name"
                helperText={<ErrorMessage name="name" />}
                error={props.errors.name}
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                variant="standard"
                placeholder="Enter your email"
                helperText={<ErrorMessage name="email" />}
                error={props.errors.email}
              />

              <FormControl style={marginTop}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <Field
                  as={RadioGroup}
                  defaultValue="female"
                  aria-label="gender"
                  name="gender"
                  style={{ display: "initial" }}
                  helperText={<ErrorMessage name="gender" />}
                  error={props.errors.gender}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </Field>
              </FormControl>

              <Field
                as={TextField}
                name="phoneNumber"
                fullWidth
                label="Phone number"
                variant="standard"
                placeholder="Enter your phone number"
                helperText={<ErrorMessage name="phoneNumber" />}
                error={props.errors.phoneNumber}
              />
              <Field
                as={TextField}
                name="password"
                type="password"
                fullWidth
                label="Password"
                variant="standard"
                placeholder="select a password"
                helperText={<ErrorMessage name="password" />}
                error={props.errors.password}
              />
              <Field
                as={TextField}
                name="confirmPassword"
                type="password"
                fullWidth
                label="Confirm password"
                variant="standard"
                placeholder="confirm your password"
                helperText={<ErrorMessage name="confirmPassword" />}
                error={props.errors.confirmPassword}
              />

              <FormControlLabel
                control={<Field as={Checkbox} name="termsAndConditions" />}
                label="I accept terms and conditions"
              ></FormControlLabel>

              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
