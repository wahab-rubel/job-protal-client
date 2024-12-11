import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import registerLottieData from "../../assets/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";

const validatePassword = (password) => {
  const minLength = 8;
  const regex = {
    hasUpperCase: /[A-Z]/,
    hasLowerCase: /[a-z]/,
    hasNumber: /\d/,
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/,
  };

  if (password.length < minLength) {
    return `Password must be at least ${minLength} characters long.`;
  }
  if (!regex.hasUpperCase.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!regex.hasLowerCase.test(password)) {
    return "Password must contain at least one lowercase letter.";
  }
  if (!regex.hasNumber.test(password)) {
    return "Password must contain at least one number.";
  }
  if (!regex.hasSpecialChar.test(password)) {
    return "Password must contain at least one special character.";
  }

  return "valid"; // Password is valid
};

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [passwordMessage, setPasswordMessage] = useState("");
  const [formError, setFormError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Validate password
    const validationMessage = validatePassword(password);
    if (validationMessage !== "valid") {
      setPasswordMessage(validationMessage);
      return; // Stop form submission if validation fails
    }

    // Attempt to create user
    createUser(email, password)
      .then((result) => {
        console.log("User created:", result.user);
        setFormError(""); // Clear any previous error
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        setFormError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
