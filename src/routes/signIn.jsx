import React from "react";
import SignInForm from "../components/signInForm";
import { getAuthToken } from "../utils/auth";
import { redirect } from "react-router-dom";

const SignIn = () => {
  return <SignInForm />;
};

export default SignIn;

export const action = async ({ request }) => {
  const data = await request.formData();

  const checkUser = {
    user: {
      email: data.get("email"),
      password: data.get("password"),
    },
  };

  const token = getAuthToken();

  const response = await fetch(`https://api.realworld.io/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(checkUser),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticated" }, { status: 500 });
  }

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration);
  console.log(token);
  localStorage.setItem("token", token);
  return redirect("/home");
};
