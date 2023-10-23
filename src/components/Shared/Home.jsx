import { useState, useEffect } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import QuestionList from "../Forum/QuestionList";
import AskQuestion from "../Forum/AskQuestion";
import "../styles/blocks.css";
import "../styles/robotoFont.css";

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name);
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
  };

  const handleManualLogin = () => {};

  return (
    <div>
      <Navbar />
      <div>
        <p>
          You are not logged in. Please{" "}
          <button onClick={handleManualLogin}>Log In</button> to access your
          account.
        </p>
      </div>
      <div className="blocks">
        <h3>ASK A QUESTION</h3>
        <AskQuestion />
      </div>
      <div className="blocks">
        <QuestionList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
