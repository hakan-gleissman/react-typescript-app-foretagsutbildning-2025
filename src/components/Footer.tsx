import { ReactNode } from "react";

type FooterProps = {
  children: ReactNode;
};

const Footer = ({ children }: FooterProps) => {
  return (
    <footer className="fixed-bottom bg-dark text-white py-2">
      <div className="text-center">{children}</div>
    </footer>
  );
};

export default Footer;
