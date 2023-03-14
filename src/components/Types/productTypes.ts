export type ProductInputs = {
  title: string;
  categories: string[];
  description: string;
  price: number;
  rentPrice: number;
  option: string;
  status: string;
  ownerId: number;
};

export interface CreateProductInput {
  title: string;
  categories: string[];
  description: string;
  price: number;
  rentPrice: number;
  option: string;
  userId: number;
  status: string;
  ownerId: number;
}
export interface BuyProductInput {
  id: number;
  status: string;
  ownerId: number;
}

export type EditInput = {
  id: number;
  title: string;
  categories: string[];
  description: string;
  price: number;
  rentPrice: number;
  option: string;
  status: string;
  ownerId: number;
};
export interface EditProductInput {
  id: number;
  title: string;
  categories: string[];
  description: string;
  price: number;
  rentPrice: number;
  option: string;
  userId: number;
  status: string;
  ownerId: number;
}

export interface UserProduct {
  id: number;
}

export interface OwnerProduct {
  ownerId: number;
}
