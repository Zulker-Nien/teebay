import Container from "@mui/material/Container";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ApolloClient, useMutation } from "@apollo/client";
import Store from "../../store";
import { toast } from "react-toastify";
import LOGIN_USER from "../Queries/loginUser";
import { User, LoginInput, LoginProps } from "../Types/userTypes";
import apolloClient from "../../ApolloClient";

interface LoginUserData {
  login: User;
}

const LoginForm = (props: LoginProps) => {
  const notify = () => toast("You are now logged in.");

  const store = useContext(Store);
  const { setLoggedIn, setUserId, loggedIn } = store;

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginInput>();
  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    login({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
  };

  const [login, { data }] = useMutation<LoginUserData, LoginInput>(LOGIN_USER);

  useEffect(() => {
    if (data != null) {
      setUserId(data?.login.id);
      setLoggedIn();
      navigate("/home");
      notify();
    }
  }, [data, loggedIn, navigate, setLoggedIn, setUserId]);

  return (
    <>
      {props.authorized ? (
        <Navigate to="/home" />
      ) : (
        <div>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
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
                      Don't have an account?{" "}
                      <span>
                        <Link to="/sign-up">Sign Up</Link>
                      </span>
                    </h3>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </Container>
        </div>
      )}
    </>
  );
};

export default observer(LoginForm);
