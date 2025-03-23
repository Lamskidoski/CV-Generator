import "./styles/CVFooter.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div>
          <h3 className="footerTitle">PHONE: </h3>
          <span className="footerInfo">(+46) 123 12 10 123</span>
        </div>

        <div>
          <h3 className="footerTitle">EMAIL</h3>
          <span className="footerInfo">EMAIL@EMAIL.COM</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
