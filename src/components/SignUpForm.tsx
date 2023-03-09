import Container from "@mui/material/Container";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Grid } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";

type Inputs = {
  fName: HTMLInputTypeAttribute;
  lName: HTMLInputTypeAttribute;
  address: HTMLInputTypeAttribute;
  email: HTMLInputTypeAttribute;
  number: HTMLInputTypeAttribute;
  password: HTMLInputTypeAttribute;
  confirmPassword: HTMLInputTypeAttribute;
};

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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
                  id="fName"
                  label="First Name"
                  variant="outlined"
                  type="string"
                  {...register("fName")}
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
                  {...register("lName")}
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
                  id="number"
                  label="Phone Number"
                  variant="outlined"
                  type="string"
                  {...register("number")}
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
            </Grid>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default SignUpForm;
