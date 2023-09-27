import React from "react";

export enum BUTTON_SIZE {
  S = "S",
  M = "M",
}

export interface IButtonWrapperProps {
  $size?: BUTTON_SIZE;
  $rounded: boolean;
}

export interface IButtonProps
  extends React.ComponentPropsWithoutRef<"button">{
  size?: BUTTON_SIZE;
  children?: React.ReactNode;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  loading?: boolean;
  rounded?: boolean;
}
