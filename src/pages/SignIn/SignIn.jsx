import Lottie from "lottie-react";
import React, { useState, useContext } from "react";
import loginLottieData from "../../assets/login.json";
import AuthContext from "../../context/AuthContext/AuthContext";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const [passwordMessage, setPasswordMessage] = useState("");
  const [formError, setFormError] = useState("");

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    if (!hasUpperCase) {
      return "Password must include at least one uppercase letter.";
    }
    if (!hasLowerCase) {
      return "Password must include at least one lowercase letter.";
    }
    if (!hasNumber) {
      return "Password must include at least one number.";
    }
    if (!hasSpecialChar) {
      return "Password must include at least one special character.";
    }
    return "valid";
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const validationMessage = validatePassword(password);
    if (validationMessage !== "valid") {
      setPasswordMessage(validationMessage);
      return;
    }

    signInUser(email, password)
      .then((result) => {
        console.log("User signed in:", result.user);
        setFormError(""); // Clear any previous form error
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
        setFormError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={loginLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl text-center mt-4">Login Here!</h1>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
                onChange={(e) => {
                  const newPassword = e.target.value;
                  const validationMessage = validatePassword(newPassword);
                  setPasswordMessage(
                    validationMessage === "valid" ? "" : validationMessage
                  );
                }}
              />
              {passwordMessage && (
                <p className="text-red-500 text-sm mt-2">{passwordMessage}</p>
              )}
            </div>
            {formError && (
              <p className="text-red-500 text-sm mt-2">{formError}</p>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
