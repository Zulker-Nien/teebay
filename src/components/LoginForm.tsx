import Container from "@mui/material/Container";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Grid } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";

type Inputs = {
  email: HTMLInputTypeAttribute;
  password: HTMLInputTypeAttribute;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(errors);

  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          //   minWidth: "100%",
          minHeight: "100%",
          p: "2%",
          border: "3px solid #c5c5c5",
          borderRadius: "10px",
        }}
      >
        <h1>SIGN IN</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            minWidth: "20%",
            maxWidth: "30vw",
            minHeight: "100%",
          }}
        >
          <Box
            sx={{
              height: "100%",
              //   minWidth: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                  {...register("email", { required: true })}
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
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    minWidth: "20%",
                  }}
                >
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} style={{ textAlign: "center" }}>
                <h3>
                  Don't have an account? <span>Sign Up</span>
                </h3>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default LoginForm;
