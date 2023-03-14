import { observer } from "mobx-react-lite";
import Navbar from "../components/Ui/Navbar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Store from "../store";
import BuyPage from "../components/Features/BuyPage";
import SellPage from "../components/Features/SellPage";

interface HomeProps {
  authorized: boolean;
}
const Home = (props: HomeProps) => {
  const navigate = useNavigate();

  const store = useContext(Store);
  const { buy, sell, userId } = store;

  return (
    <>
      {props.authorized ? (
        <div>
          <Navbar />
          {buy && <BuyPage />}
          {sell && <SellPage />}
          {userId}
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default observer(Home);
