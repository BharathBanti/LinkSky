import { useState } from "react";
import { signUp, login } from "../../services/auth";

function TestAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    try {
      const res = await signUp({ email, password });
      console.log("Signup success:", res);
      alert("Check your email for verification!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  async function handleLogin() {
    try {
      const res = await login({ email, password });
      console.log("Login success:", res);
      alert("Login successful!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Test Auth</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default TestAuth;