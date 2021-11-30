import { CustomeButton } from "./Button.Styles";

const Button = ({
  text,
  onClick = () => {},
  isGray,
  width,
  height,
  borderRadius,
  style = {},
  isLoading,
  isOrange,
  link = "",
}) => {
  return (
    <CustomeButton
      to={link}
      as={link ? "" : "button"}
      disabled={isLoading}
      onClick={onClick}
      isGray={isGray}
      borderRadius={borderRadius}
      style={style}
      width={width}
      height={height}
      isOrange={isOrange}
    >
      {text}
    </CustomeButton>
  );
};

export default Button;
