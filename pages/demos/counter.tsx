import Box from "@mui/material/Box/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4">BASIC Form</Typography>
        <form
          action="
        
        "
        >
          <TextField type="text" label="Name" variant="outlined" />
          <br />
          <TextField type="text" label="Last Name" variant="outlined" />
        </form>
      </Box>
    </div>
  );
};

export default Counter;
