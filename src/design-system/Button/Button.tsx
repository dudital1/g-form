import { FC, ReactNode } from "react";
import { Button as BaseButton } from "./Button.styles";

interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
  children,
  disabled = false,
  ...buttonProps
}) => {
  return (
    <BaseButton disabled={disabled} {...buttonProps}>
      {children}
    </BaseButton>
  );
};
