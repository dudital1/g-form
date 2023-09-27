import { BUTTON_SIZE, IButtonProps } from "./Button.types";
import { IconWrapper, Wrapper } from "./Button.styles";

const Button = ({
  size = BUTTON_SIZE.M,
  leftIcon,
  rightIcon,
  children,
  loading,
  disabled,
  rounded,
  ...buttonProps
}: IButtonProps) => {
  return (
    <Wrapper
      $size={size}
      disabled={disabled || loading}
      $rounded={rounded || false}
      {...buttonProps}
    >
      <IconWrapper>{leftIcon}</IconWrapper>
      {children}
      <IconWrapper>{rightIcon}</IconWrapper>
    </Wrapper>
  );
};

export default Button;
