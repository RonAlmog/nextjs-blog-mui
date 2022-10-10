import { Button, styled, Typography } from "@mui/material";
import React from "react";
import { Add, Settings } from "@mui/icons-material";

type Props = {};

const Styling = (props: Props) => {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
      color: "white",
    },
    "&:disabled": {
      backgroundColor: "gray",
    },
  });
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        variant="contained"
        startIcon={<Settings />}
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        variant="contained"
        startIcon={<Add />}
        color="success"
        size="small"
      >
        Add new post
      </Button>
      <Typography variant="h4" component="p">
        The brown fox joumped over the big fence.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          m: 5,
          "&:hover": {
            backgroundColor: "lightblue",
            color: "white",
          },
          "&:disabled": {
            backgroundColor: "gray",
          },
        }}
      >
        Very Unique Button
      </Button>
      <BlueButton variant="contained">Very Unique Button</BlueButton>
      <BlueButton variant="contained">Another Button</BlueButton>
    </div>
  );
};

export default Styling;
