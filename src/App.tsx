import "./Assets/global.scss";
import LoginForm from "./components/LoginForm";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SignUpForm from "./components/SignUpForm";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Store from "./store";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const store = useContext(Store);
  const { loggedIn } = store;
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<LoginForm authorized={loggedIn} />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/home" element={<Home authorized={loggedIn} />} />
      </Routes>
    </>
  );
}

export default observer(App);
