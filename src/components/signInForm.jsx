import React from "react";
import { Form, Link, useActionData } from "react-router-dom";

const SignInForm = () => {
  const data = useActionData();

  let error;

  if (data) {
    error = Object.values(data.errors).map((err) => err);
  }

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/6d1d9ae0-45d0-4194-a4c2-222ae667bf0d/BR-pt-20220718-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <div className="text-red-600"> {error}</div>
              <Form method="post" className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="E-mail"
                  autoComplete="email"
                  name="email"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  name="password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  LogIn
                </button>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <p>
                    <input className="mr-2" type="checkbox" /> Remember me
                  </p>
                  <p className="cursor-pointer">Need help</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-400 mr-2">
                    If you dont have account?
                  </span>
                  <Link to="signup">SignUp</Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
