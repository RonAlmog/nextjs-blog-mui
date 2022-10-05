import { TabPanelUnstyled } from "@mui/base";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import React, { useState } from "react";

type Props = {};

const SignupLogin = (props: Props) => {
  const [value, setValue] = useState("0");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Paper square>
      <TabContext value={value}>
        <TabList
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="xx"></Tab>
          <Tab label="yy"></Tab>
        </TabList>
        <TabPanel value="0">xxx</TabPanel>
        <TabPanel value="1">yyy</TabPanel>
      </TabContext>
    </Paper>
  );
};

export default SignupLogin;
