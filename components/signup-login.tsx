import { TabPanelUnstyled } from "@mui/base";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import React, { useState } from "react";
import Login from "./login";
import SignUp from "./signup";

type Props = {};

const SignupLogin = (props: Props) => {
  const [value, setValue] = useState("signin");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const paperStyle = { width: 320, margin: "20px auto" };
  const tabStyle = { padding: 0 };
  return (
    <Paper style={paperStyle} elevation={20}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            variant="fullWidth"
          >
            <Tab label="Sign In" value="signin"></Tab>
            <Tab label="Sign Up" value="signup"></Tab>
          </TabList>
        </Box>
        <TabPanel value="signin" style={tabStyle}>
          <Login />
        </TabPanel>
        <TabPanel value="signup" style={tabStyle}>
          <SignUp />
        </TabPanel>
      </TabContext>
    </Paper>
  );
};

export default SignupLogin;
