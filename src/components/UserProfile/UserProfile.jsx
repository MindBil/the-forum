import { useState, useEffect } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import "../Styles/footer.css";

function UserProfile({ userId, questionCount }) {
  const [user, setUser] = useState(null);
  const [userQuestions, setUserQuestions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedUser && isLoggedIn === "true") {
      setIsLoggedIn(true);

      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="footer">
      <Navbar />
      <h2>Profile</h2>
      {isLoggedIn ? (
        <div>
          <h3>Welcome, {user ? user.username : "User"}</h3>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}

      <h3>User's Questions</h3>
      <p>Number of Questions: {questionCount}</p>
      <ul>
        {userQuestions.map((question) => (
          <li key={question.id}>
            <a href={`/questions/${question.id}`}>{question.title}</a>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default UserProfile;
