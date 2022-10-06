import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Box from "@mui/system/Box";
import Link from "../src/Link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type Props = {};
const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 320,
  margin: "0 auto",
};
const avatarStyle = { backgroundColor: "#1bbd7e" };
const btstyle = { margin: "8px 0" };
const initialValues = {
  username: "",
  password: "",
  rememberme: false,
};
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email("Please enter a valid email")
    .required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = ({ handleChange }) => {
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
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
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
                name="username"
                variant="standard"
                label="Username"
                placeholder="Enter user name"
                fullWidth
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                name="password"
                variant="standard"
                label="Password"
                placeholder="Enter password"
                fullWidth
                type="password"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={FormControlLabel}
                name="rememberme"
                control={<Checkbox color="primary" />}
                label="Remember Me"
              ></Field>

              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                style={btstyle}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>

        <Typography>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography>
          Have an account?
          <Link href="#" onClick={() => handleChange("event", "signup")}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
