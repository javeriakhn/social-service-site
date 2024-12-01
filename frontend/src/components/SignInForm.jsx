import { InputField, PasswordField } from "./Field";
import { SignUpButton } from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { validatePassword } from "./signup/SignUpForm";

const SignInForm = () => {
  const [SignInState, setSignInState] = useState({
    emailAddress: "",
    password: "",

    emailAddressError: false,
    passwordValidationError: false,
    isSuccess: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setSignInState({
      ...SignInState,
      emailAddressError: false,
      passwordValidationError: false,
      isSuccess: false,
    });

    let emailAddressError = false;
    if (SignInState.emailAddress.length == 0) {
      emailAddressError = "Email address is required";
    }

    let passwordValidationError = false;
    if (SignInState.password.length == 0) {
      passwordValidationError = "Password is required";
    } else {
      if (Object.values(validatePassword(SignInState.password)).includes(false)) {
        passwordValidationError= ""
      }
    }

    setSignInState({
      ...SignInState,
      emailAddressError,
      passwordValidationError,
    });
    console.log(SignInState);
  };

  return (
    <form
      className="flex flex-col w-full max-md:max-w-full"
      onSubmit={onSubmit}
    >
      <InputField
        type="email"
        value={SignInState.emailAddress}
        onChange={(e) =>
          setSignInState({
            ...SignInState,
            emailAddress: e.target.value,
          })
        }
        error={SignInState.emailAddressError}
        label={"Email Address"}
        placeholder={"Enter your email address"}
      />

      <PasswordField
        password={SignInState.password}
        error={SignInState.passwordValidationError}
        setPassword={(value) => {
          setSignInState({
            ...SignInState,
            password: value,
          });
        }}
      />
      <div className="flex flex-col justify-between mt-2 w-full text-sm font-medium min-h-[24px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
          <label className="flex flex-1 shrink gap-2 items-center self-stretch my-auto leading-loose basis-0 text-zinc-800">
            <input type="checkbox" className="h-4 w-4 border-2" />
            <span>Remember me</span>
          </label>
          <Link
            to="#"
            className="flex-1 shrink self-stretch my-auto text-right text-orange-600 basis-0"
          >
            Forgot Password
          </Link>
        </div>
      </div>
      <div className="flex-1 shrink gap-2.5 mt-7 max-w-full text-sm font-semibold leading-6 text-blue-600 w-[508px] max-md:max-w-full">
        <span className="font-medium">
          By clicking the Sign In button below, you agree to the our{" "}
        </span>
        <span className="font-medium text-blue-600">Term of Use</span>
        <span className="font-medium"> and </span>
        <span className="font-medium text-blue-600">Privacy Policy.</span>
      </div>
      <div className="flex flex-col justify-center mt-7 w-full text-sm max-md:max-w-full">
        <SignUpButton text="Sign In" />
        <div className="flex gap-2 items-center self-center mt-4 text-center">
          <p className="self-stretch my-auto font-medium text-zinc-800">
            Don’t have an account?{" "}
          </p>
          <Link
            to="/signup"
            className="self-stretch my-auto font-semibold leading-loose text-orange-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
