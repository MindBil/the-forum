import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import "../Styles/footer.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        setError("Please enter both username and password.");
        return;
      }

      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        navigate("/profile");
      } else if (response.status === 401) {
        setError("Login failed. Please check your credentials.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="footer">
      <Navbar />
      <h2>Login</h2>
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
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin}>Login</button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
