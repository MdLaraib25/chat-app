import React from "react";
import assets from "../../assets/assets";
import TextInput from "./TextInput";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-4">
      <div className="flex items-center gap-16">
        
        <img
          className="hidden md:block w-[max(20vw,220px)]"
          src={assets.logo_big}
          alt="Logo"
        />

        {/* Form Card */}
        <form className="w-[min(95vw,460px)] rounded-[10px] bg-white p-10 shadow-lg">
          <h2 className="mb-6 text-center text-2xl font-semibold">Sign Up</h2>

          {/* Inputs */}
          <div className="flex flex-col gap-5">
            <TextInput type="text" placeholder="Username" required />
            <TextInput type="email" placeholder="Email" required />
            <TextInput type="password" placeholder="Password" required />
          </div>

          {/* Terms */}
          <label className="mt-4 flex items-center gap-1 justify-center text-sm text-gray-600">
            <input type="checkbox" className="mt-1 accent-orange-500" />
            <span>Agree to the terms of use & privacy policy.</span>
          </label>

          {/* CTA */}
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-orange-500 py-2.5 font-medium text-white transition hover:bg-orange-600"
          >
            Sign Up
          </button>

          {/* Footer */}
          <p className="mt-4 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <span className="cursor-pointer font-medium text-orange-500 hover:underline">
              Click here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
