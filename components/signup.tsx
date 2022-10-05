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

type Props = {};

const SignUp = (props: Props) => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 320,
    margin: "0px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btstyle = { margin: "8px 0" };
  const headerStyle = { margin: 0 };
  const marginTop = { marginTop: 5 };
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
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Name"
            variant="standard"
            placeholder="Enter your name"
          />
          <TextField
            fullWidth
            label="Email"
            variant="standard"
            placeholder="Enter your email"
          />

          <FormControl style={marginTop}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              defaultValue="female"
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <TextField
            fullWidth
            label="Phone number"
            variant="standard"
            placeholder="Enter your phone number"
          />
          <TextField
            fullWidth
            label="Password"
            variant="standard"
            placeholder="select a password"
          />
          <TextField
            fullWidth
            label="Confirm password"
            variant="standard"
            placeholder="confirm your password"
          />

          <FormControlLabel
            control={<Checkbox name="checkbox" />}
            label="I accept terms and conditions"
          ></FormControlLabel>

          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
