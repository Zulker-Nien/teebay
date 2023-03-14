import { makeObservable, observable, action } from "mobx";
import { createContext } from "react";

class Store {
  emailData = "";
  passwordData = "";
  loggedIn = false;
  buy = true;
  sell = false;
  userId = 0;
  singleItem = 0;

  constructor() {
    makeObservable(this, {
      emailData: observable,
      passwordData: observable,
      loggedIn: observable,
      buy: observable,
      sell: observable,
      singleItem: observable,
      userId: observable,
      setEmail: action,
      setPassword: action,
      setLoggedIn: action,
      setLogOut: action,
      setBuy: action,
      setSell: action,
      setUserId: action,
      setSingleItem: action,
    });
  }

  setEmail = (emailData) => {
    this.emailData = emailData;
  };

  setPassword = (passwordData) => {
    this.passwordData = passwordData;
  };

  setLoggedIn = () => {
    this.loggedIn = true;
    localStorage.setItem("loggedIn", "true");
  };

  setLogOut = () => {
    localStorage.removeItem("loggedIn");
    this.loggedIn = false;
    this.passwordData = "";
    this.emailData = "";
  };

  setBuy = () => {
    this.buy = true;
    this.sell = false;
  };

  setSell = () => {
    this.buy = false;
    this.sell = true;
  };
  setUserId = (id) => {
    this.userId = id;
    localStorage.setItem("userId", id);
  };
  setSingleItem = (id) => {
    this.singleItem = id;
  };
}

const store = new Store();

export default createContext(store);
