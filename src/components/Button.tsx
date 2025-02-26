import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color: "primary" | "danger";
  onClick: () => void
};

const Button = ({ children, color , onClick}: Props) => {
  /*const buttonStyle = {
    backgroundColor: "#333333",
    borderRadius: "3px",
    padding: "5px 10px",
    color: "whitesmoke",
  };
  return (
    <button type="button" style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );*/
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );

};

export default Button;
