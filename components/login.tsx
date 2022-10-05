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
import Link from "next/link";

type Props = {};
const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 320,
  margin: "0px auto",
};
const avatarStyle = { backgroundColor: "#1bbd7e" };
const btstyle = { margin: "8px 0" };

const Login = (props: Props) => {
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
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
        <TextField
          label="Username"
          placeholder="Enter user name"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          fullWidth
          type="password"
          required
        />
        <FormControlLabel
          control={<Checkbox name="" color="primary" />}
          label="Remember Me"
        ></FormControlLabel>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          style={btstyle}
        >
          Sign In
        </Button>

        <Typography>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography>
          Have an account?
          <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
