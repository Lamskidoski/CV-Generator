import "./styles/CVFooter.css";

type FooterProps = {
  email: string;
  phone: string;
};

const Footer = ({ email, phone }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div>
          <h3 className="footerTitle">PHONE: </h3>
          <span className="footerInfo">{phone || "(+46) 123 12 10 123"}</span>
        </div>

        <div>
          <h3 className="footerTitle">EMAIL</h3>
          <span className="footerInfo">{email || "email@email.com"}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
