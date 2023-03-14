import { makeObservable, observable, action } from "mobx";
import { createContext } from "react";

class Store {
  loggedIn = false;
  buy = true;
  sell = false;
  userId = 0;
  singleItem = 0;
  productAdded = false;
  openEdit = false;
  editItem = {
    id: 0,
    title: "",
    categories: [""],
    description: "",
    price: 0,
    rentPrice: 0,
    option: "",
  };

  constructor() {
    makeObservable(this, {
      loggedIn: observable,
      buy: observable,
      sell: observable,
      singleItem: observable,
      userId: observable,
      openEdit: observable,
      editItem: observable,
      setLoggedIn: action,
      setLogOut: action,
      setBuy: action,
      setSell: action,
      setUserId: action,
      setSingleItem: action,
      setOpenEdit: action,
      setCloseEdit: action,
      setEditItem: action,
    });
  }

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
  };
  setSingleItem = (id) => {
    this.singleItem = id;
  };
  setOpenEdit = () => {
    this.openEdit = true;
  };
  setCloseEdit = () => {
    this.openEdit = false;
  };

  setEditItem = (item) => {
    this.editItem = item;
  };
}

const store = new Store();

export default createContext(store);
