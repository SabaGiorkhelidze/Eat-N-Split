import { BtnPropTypes } from "../Types/ButtonType";

const Button = ({ children, onClick }: BtnPropTypes) => {
  return (
    <>
      <button className="button" onClick={onClick}>{children}</button>
    </>
  );
};

export default Button;
