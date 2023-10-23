import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import "../Styles/footer.css";

const Contacts = () => {
  return (
    <div className="footer">
      <Navbar />
      <h1>Contacts</h1>
      <p>
        Thank you for your interest in our services. Please feel free to get in
        touch with us using the following contact information:
      </p>
      <address>
        <strong>THE FORUM - Ask anything</strong>
        <br />
        Rašytojų g. 1,
        <br />
        Vilnius, LT-00001
        <br />
        Lithuania
        <br />
        <br />
        <a href="tel:(+370) 456-0000">Phone: (8) 456-7890</a>
        <br />
        <a href="mailto:info@theforum.com">Email: info@theforum.com</a>
        <br />
      </address>
      <p>
        We are available during our office hours, which are Monday to Friday,
        9:00 AM to 5:00 PM. If you have any inquiries or need assistance, please
        dont hesitate to reach out to us.
      </p>
      <p>
        For specific inquiries, you can contact our departments:
        <ul>
          <li>
            <strong>Customer Support:</strong>{" "}
            <a href="mailto:support@theforum.com">support@theforum.com</a>{" "}
            <a href="tel:(+370) 456-0000">(8) 456-7891</a>
          </li>
          <li>
            <strong>Sales:</strong>{" "}
            <a href="mailto:sales@example.com">sales@theforum.com</a>{" "}
            <a href="tel:(+370) 456-7892">(8) 456-7892</a>
          </li>
          <li>
            <strong>Press Inquiries:</strong>{" "}
            <a href="mailto:press@theforum.com">press@example.com</a>{" "}
            <a href="tel:(+370) 456-7893">(8) 456-7893</a>
          </li>
        </ul>
      </p>
      <p>
        Your feedback and suggestions are valuable to us. Please use the contact
        form on this page to send us a message, and well get back to you as soon
        as possible.
      </p>
      <Footer />
    </div>
  );
};

export default Contacts;
