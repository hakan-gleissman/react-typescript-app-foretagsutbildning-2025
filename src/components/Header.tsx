import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};
const Header = ({ children }: HeaderProps) => {
  return <header className="bg-dark text-white py-2">{children}</header>;
};

export default Header;
