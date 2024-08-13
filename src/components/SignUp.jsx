import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SignupApi } from "../API/userAuthenticationApi";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Signup = ({ onSignup, setLoggedIn }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [school, setSchool] = useState(""); // New state for school
  const [schoolError, setSchoolError] = useState(""); // New state for school error
  const navigate = useNavigate();

  const handleFirstNameChange = (event) => {
    const inputValue = event.target.value;
    const lettersOnlyRegex = /^[A-Za-z]+$/;

    if (lettersOnlyRegex.test(inputValue) || inputValue === "") {
      setFirstName(inputValue);
      setFirstNameError("");
    } else {
      setFirstNameError("Please enter only letters");
    }
  };

  const handleLastNameChange = (event) => {
    const inputValue = event.target.value;
    const lettersOnlyRegex = /^[A-Za-z]+$/;

    if (lettersOnlyRegex.test(inputValue) || inputValue === "") {
      setLastName(inputValue);
      setLastNameError("");
    } else {
      setLastNameError("Please enter only letters");
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(newEmail);

    if (isValidEmail) {
      setEmailError("");
    } else {
      setEmailError("Enter a valid email address");
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSchoolChange = (event) => {
    const inputValue = event.target.value;
    const lettersOnlyRegex = /^[A-Za-z\s]+$/;

    if (lettersOnlyRegex.test(inputValue) || inputValue === "") {
      setSchool(inputValue);
      setSchoolError("");
    } else {
      setSchoolError("Please enter only letters");
    }
  };

  const isSignUpDisabled =
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    school === "" ||
    Boolean(emailError) ||
    Boolean(passwordError) ||
    Boolean(schoolError);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const school = data.get("school");
    const displayName = `${firstName} ${lastName}`.trim();

    try {
      const response = await SignupApi(email, password, displayName, school);
      if (response.status === 200) {
        setLoggedIn(true);
        navigate("/login");
        onSignup(firstName);
      }
    } catch (error) {
      if (error.response?.data?.error?.code === "auth/email-already-in-use") {
        alert("The email is already in use");
      } else {
        alert(`Unexpected error: ${error.message}`);
      }
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(img/signup.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "green" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Get Started Now
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={firstName}
                    onChange={handleFirstNameChange}
                    error={Boolean(firstNameError)}
                    helperText={firstNameError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    error={Boolean(lastNameError)}
                    helperText={lastNameError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmailChange}
                    error={Boolean(emailError)}
                    helperText={emailError}
                    InputProps={{
                      inputProps: {
                        pattern: "[^s@]+@[^s@]+.[^s@]+",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={handlePasswordChange}
                    error={Boolean(passwordError)}
                    helperText={passwordError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="school"
                    label="School"
                    name="school"
                    autoComplete="school"
                    value={school}
                    onChange={handleSchoolChange}
                    error={Boolean(schoolError)}
                    helperText={schoolError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={[
                  { "&:hover": { backgroundColor: "teal" } },
                  { mt: 3, mb: 2, backgroundColor: "green" },
                ]}
                disabled={isSignUpDisabled}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Signup;
