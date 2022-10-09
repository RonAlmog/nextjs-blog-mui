import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
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
import { useState } from "react";

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
    gender: Yup.string()
      .oneOf(["male", "female"], "Please select gender")
      .required("Please select gender"),
    phoneNumber: Yup.number().typeError("Enter a valid phone number"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be 6 chars min")
      .max(20, "Password should be 20 chars max"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password does not match")
      .required("Confirm password is required"),
    termsAndConditions: Yup.bool().oneOf([true], "Accept term and condition"),
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
                error={Boolean(props.errors.name)}
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                variant="standard"
                placeholder="Enter your email"
                helperText={<ErrorMessage name="email" />}
                error={Boolean(props.errors.email)}
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
                  error={Boolean(props.errors.gender)}
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
                <FormHelperText error={Boolean(props.errors.gender)}>
                  <ErrorMessage name="gender" />
                </FormHelperText>
              </FormControl>

              <Field
                as={TextField}
                name="phoneNumber"
                fullWidth
                label="Phone number"
                variant="standard"
                placeholder="Enter your phone number"
                helperText={<ErrorMessage name="phoneNumber" />}
                error={Boolean(props.errors.phoneNumber)}
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
                error={Boolean(props.errors.password)}
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
                error={Boolean(props.errors.confirmPassword)}
              />

              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    name="termsAndConditions"
                    helperText={<ErrorMessage name="termsAndConditions" />}
                    error={Boolean(props.errors.termsAndConditions)}
                  />
                }
                label="I accept terms and conditions"
              ></FormControlLabel>
              <FormHelperText error={Boolean(props.errors.termsAndConditions)}>
                <ErrorMessage name="termsAndConditions" />
              </FormHelperText>
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
              {console.log(props)}
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
