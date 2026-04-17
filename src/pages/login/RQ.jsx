import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signUp, login } from "../../services/auth";

function TestAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ SIGNUP MUTATION
  const signupMutation = useMutation({
    mutationFn: signUp,
    onSuccess: (res) => {
      console.log("Signup success:", res);
      alert("Check your email for verification!");
    },
    onError: (err) => {
      console.error(err);
      alert(err.message);
    },
  });

  // ✅ LOGIN MUTATION
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      console.log("Login success:", res);
      alert("Login successful!");
    },
    onError: (err) => {
      console.error(err);
      alert(err.message);
    },
  });

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

      {/* SIGNUP BUTTON */}
      <button
        onClick={() =>
          signupMutation.mutate({ email, password })
        }
        disabled={signupMutation.isPending}
      >
        {signupMutation.isPending ? "Signing up..." : "Sign Up"}
      </button>

      {/* LOGIN BUTTON */}
      <button
        onClick={() =>
          loginMutation.mutate({ email, password })
        }
        disabled={loginMutation.isPending}
        style={{ marginLeft: "10px" }}
      >
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}

export default TestAuth;