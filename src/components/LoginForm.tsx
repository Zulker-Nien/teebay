import Container from "@mui/material/Container";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import Store from "../store";
import { toast } from "react-toastify";

type Inputs = {
  email: string;
  password: string;
};

interface LoginProps {
  authorized: boolean;
}

interface User {
  id: number;
  email: string;
  password: string;
}

interface LoginUserData {
  login: User;
}

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      password
      id
    }
  }
`;

const LoginForm = (props: LoginProps) => {
  const notify = () => toast("You are now logged in.");

  const store = useContext(Store);
  const { setEmail, setPassword, setLoggedIn, setUserId } = store;
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    login({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    notify();
  };

  const [login, { data }] = useMutation<LoginUserData, Inputs>(LOGIN_USER);

  useEffect(() => {
    if (data != null) {
      setEmail(data?.login.email);
      setPassword(data?.login.password);
      setUserId(data?.login.id);
      setLoggedIn();
      navigate("/home");
    }
  }, [data, navigate, setEmail, setLoggedIn, setPassword, setUserId]);

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
