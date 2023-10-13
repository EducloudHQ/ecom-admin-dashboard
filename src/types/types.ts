import { MouseEventHandler } from "react";

export interface productData {
  name: string;
  description: string;
  productImageUrls: Array<string>;
  price: number;
  quantity: number;
  inStock: boolean;
  categoryID: string;
  sizes?: Array<string>;
  colors?: Array<string>;
  hasSizes: boolean;
  hasColors: boolean;
}

export interface userData {
  firstName: string;
  lastName: string;
  email: string;
  // address: Map<str,
  phoneNumber: string;
  password: string;
}

export interface signinUserData {
  email: string;
  password: string;
}

export interface confirmUserData {
  email: string;
  code: string;
}

export interface buttonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: String;
  isDisable?: boolean;
}