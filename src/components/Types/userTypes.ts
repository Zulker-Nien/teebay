export type LoginInput = {
  email: string;
  password: string;
};

export interface LoginProps {
  authorized: boolean;
}

export interface User {
  id: number;
  email: string;
  password: string;
}

export type SignUpInputs = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export interface CreateUserInput {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
  password: string;
}
