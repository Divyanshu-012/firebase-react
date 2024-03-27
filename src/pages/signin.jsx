import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Signin success"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signin-page">
      <h1>Signin Page</h1>
      <labe>Enter your email here</labe>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter your email here"
      />
      <labe>Enter your password here</labe>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter your password here"
      />
      <button onClick={signinUser}>Signin me in</button>
    </div>
  );
};

export default SigninPage;
