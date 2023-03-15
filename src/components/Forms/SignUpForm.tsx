import Container from "@mui/material/Container";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Grid } from "@mui/material";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CREATE_USER from "../Queries/signUpUser";
import { SignUpInputs, CreateUserInput } from "../Types/userTypes";

interface CreateUserResponse {
  createUser: CreateUserInput;
}

const SignUpForm = () => {
  const signUpNotification = () => toast("You have registered successfully.");
  const unmatchPasswordNotification = () => toast("Passwords do not match.");
  const unsuccessfulNotification = () =>
    toast("An error occurred while signing up.");

  const navigate = useNavigate();

  const [createUser] = useMutation<CreateUserResponse, CreateUserInput>(
    CREATE_USER
  );

  const { register, handleSubmit } = useForm<SignUpInputs>();

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      unmatchPasswordNotification();
      return;
    }

    try {
      await createUser({
        variables: {
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          email: data.email,
          phoneNumber: data.phoneNumber,
          password: data.password,
        },
      });
      signUpNotification();
      navigate("/");
    } catch (error) {
      unsuccessfulNotification();
    }
  };
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "100%",
          minHeight: "100%",
          p: "2%",
          border: "3px solid #c5c5c5",
          borderRadius: "10px",
        }}
      >
        <h1>SIGN UP</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            minWidth: "100%",
            minHeight: "100%",
            maxWidth: "40vw",
          }}
        >
          <Box
            sx={{
              height: "100%",
              minWidth: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  type="string"
                  {...register("firstName")}
                  sx={{
                    minWidth: "100%",
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="lName"
                  label="Last Name"
                  variant="outlined"
                  type="string"
                  {...register("lastName")}
                  sx={{
                    minWidth: "100%",
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="address"
                  label="Address"
                  variant="outlined"
                  type="string"
                  {...register("address")}
                  sx={{
                    minWidth: "100%",
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  required
                  type="email"
                  {...register("email", { required: true })}
                  sx={{
                    minWidth: "100%",
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="phoneNumber"
                  label="Phone Number"
                  variant="outlined"
                  type="string"
                  {...register("phoneNumber")}
                  sx={{
                    minWidth: "100%",
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  required
                  {...register("password", { required: true })}
                  sx={{
                    minWidth: "100%",
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  required
                  {...register("confirmPassword", { required: true })}
                  sx={{
                    minWidth: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    minWidth: "50%",
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <h3>
                  Already have an account?{" "}
                  <span>
                    <Link to="/">Sign In</Link>
                  </span>
                </h3>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default SignUpForm;
