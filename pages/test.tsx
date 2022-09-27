import { Badge, Box, Divider, Typography } from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";

function Test() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <div>
        <Badge badgeContent={1} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={2} color="secondary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={3} color="info">
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="warning">
          <MailIcon />
        </Badge>
        <Badge badgeContent={5} color="error">
          <MailIcon />
        </Badge>
        <Badge badgeContent={6} color="success">
          <MailIcon />
        </Badge>
        {/* , color: theme.palette.warning.dark */}
        <div style={{ height: "400px" }}>
          hello warning dark
          <Typography color="primary" variant="h1">
            Hello Typography primary h1
          </Typography>
          <Divider />
          <Typography color="secondary" variant="h3">
            Hello Typography secondary h3
          </Typography>
          <Divider />
          <Typography variant="h4">Hello Typography primary h4</Typography>
          <Divider />
          <p>Just a paragraph with no styling</p>
        </div>
      </div>
    </Box>
  );
}

export default Test;
