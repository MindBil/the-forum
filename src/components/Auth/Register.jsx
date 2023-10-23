import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import "../Styles/footer.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      navigate("/");
    }
  }, [navigate]);

  const handleRegister = () => {
    if (!username || !password || !email) {
      setError("Please fill in all fields.");
      return;
    }

    const user = {
      username,
      password,
      email,
    };

    try {
      localStorage.setItem("user", JSON.stringify(user));

      setIsRegistered(true);
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  if (isRegistered) {
    navigate("/login");
    return null;
  }

  return (
    <div className="footer">
      <Navbar />
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button onClick={handleRegister}>Register</button>
      </form>
      <Footer />
    </div>
  );
}

export default Register;
