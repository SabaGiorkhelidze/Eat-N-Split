interface btnProp {
  children: string;
  onClick: () => void
}

const Button = ({ children, onClick }: btnProp) => {
  return (
    <>
      <button className="button" onClick={onClick}>{children}</button>
    </>
  );
};

export default Button;
