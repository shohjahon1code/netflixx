import React from "react";
import { json, redirect } from "react-router-dom";
import SignUpForm from "../components/signupForm";

const SignUp = () => {
  return <SignUpForm />;
};

export default SignUp;

export const action = async ({ request }) => {
  const data = await request.formData();

  const newUser = {
    user: {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    },
  };

  const response = await fetch(`https://api.realworld.io/api/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticated" }, { status: 500 });
  }

  const resData = await response.json();
  
  const token = resData.user.token;
  if (response.ok && token) {
    
    localStorage.setItem("token", token);
    const expirition = new Date();
    expirition.setHours(expirition.getHours() + 1);
    localStorage.setItem("expirition", expirition);

    return redirect("/home");
  }
};
