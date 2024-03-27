
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from './firebase';
import SignupPage from "./pages/signup";
import SigninPage from "./pages/signin";
import './App.css';

const auth = getAuth(app);

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      'kapariyadiv@gmail.com',
      'Div@123'
    ).then((value) => console.log(value));
  };

  return (
    <div className="App">
      <SignupPage />
      <SigninPage />

    </div>
  );
}

export default App;
