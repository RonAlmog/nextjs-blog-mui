import { Avatar, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

type Props = {};
const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 280,
  margin: "20px auto",
};

const Login = (props: Props) => {
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        test
      </Paper>
    </Grid>
  );
};

export default Login;
