import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/robotoFont.css";

function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "5px 0",
    position: "relative",
    bottom: "5px",
    width: "100%",
  };

  const innerDivStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyle = {
    fontSize: "12px",
    margin: "5px",
  };

  return (
    <footer style={footerStyle}>
      <div style={innerDivStyle}>
        <div>
          <p style={textStyle}>
            All rights reserved &copy; 2023 The Forum - Ask anything
            <br />
            Stay Connected: Follow us on social media for the latest updates,
            news, and special offers. <FacebookIcon /> <TwitterIcon />{" "}
            <InstagramIcon /> <LinkedInIcon />
            <br />
            Contact Us: Phone: (+370) 456-0000 | Email: info@theforum.com |
            Address: Rašytojų g, 1. Vilnius, Lithuania
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
