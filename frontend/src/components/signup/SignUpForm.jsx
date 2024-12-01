import { InputField, PasswordField } from "../Field";
import { SignUpButton } from "../Button";
import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import Model from "../Model";
import SignUpSuccess from "./SignUpSuccess";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [signUpState, setSignUpState] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",

    firstNameError: false,
    lastNameError: false,
    emailAddressError: false,
    passwordValidationError: false,
    isSuccess: false,
  });

  const [validation, setValidation] = useState({
    hasMinimum12Characters: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSymbol: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setSignUpState({
      ...signUpState,
      firstNameError: false,
      lastNameError: false,
      emailAddressError: false,
      passwordValidationError: false,
      isSuccess: false,
    });

    const validation = validatePassword(signUpState.password);
    setValidation(validation);

    let firstNameError = false;
    if (signUpState.firstName.length == 0) {
      firstNameError = "First Name is required";
    }
    let lastNameError = false;
    if (signUpState.lastName.length == 0) {
      lastNameError = "LastName is required";
    }

    let emailAddressError = false;
    if (signUpState.emailAddress.length == 0) {
      emailAddressError = "Email address is required";
    }

    const isSuccess = !Object.values(validation).includes(false);

    setSignUpState({
      ...signUpState,
      firstNameError,
      lastNameError,
      emailAddressError,
      passwordValidationError:
        isSuccess || "Value doesn’t comply with requirements",
      isSuccess,
    });
    // console.log(validation);
  };

  return (
    <>
      {signUpState.isSuccess && (
        <Model>
          <SignUpSuccess />
        </Model>
      )}
      <form
        className="flex flex-col w-full max-md:max-w-full"
        onSubmit={onSubmit}
      >
        <InputField
          value={signUpState.firstName}
          onChange={(e) =>
            setSignUpState({
              ...signUpState,
              firstName: e.target.value,
            })
          }
          error={signUpState.firstNameError}
          label={"First Name"}
          placeholder={"Enter your first name"}
        />
        <InputField
          value={signUpState.lastName}
          onChange={(e) =>
            setSignUpState({
              ...signUpState,
              lastName: e.target.value,
            })
          }
          error={signUpState.lastNameError}
          label={"Last Name"}
          placeholder={"Enter your last name"}
        />
        <InputField
          type="email"
          value={signUpState.emailAddress}
          onChange={(e) =>
            setSignUpState({
              ...signUpState,
              emailAddress: e.target.value,
            })
          }
          error={signUpState.emailAddressError}
          label={"Email Address"}
          placeholder={"Enter your email address"}
        />

        <PasswordField
          password={signUpState.password}
          error={signUpState.passwordValidationError}
          setPassword={(value) => {
            setSignUpState({
              ...signUpState,
              password: value,
            });
          }}
        />
        {/* {signUpState.showValidation && ( */}
        <div className="flex-1 p-3 px-6 mt-3 w-full leading-6 rounded-lg bg-indigo-500 bg-opacity-10 text-zinc-800">
          Your password must have at least:
          <ol
            className={`${
              !signUpState.passwordValidationError && "list-disc"
            } mt-2`}
          >
            <li>
              <div className="flex items-center gap-2">
                {signUpState.passwordValidationError &&
                  renderValidationIcon(validation.hasMinimum12Characters)}
                Minimum 12 characters
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                {signUpState.passwordValidationError &&
                  renderValidationIcon(validation.hasUppercase)}
                1 uppercase letter
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                {signUpState.passwordValidationError &&
                  renderValidationIcon(validation.hasLowercase)}
                1 lowercase letter
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                {signUpState.passwordValidationError &&
                  renderValidationIcon(validation.hasNumber)}
                1 number
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                {signUpState.passwordValidationError &&
                  renderValidationIcon(validation.hasSymbol)}
                1 symbol
              </div>
            </li>
          </ol>
        </div>
        {/* )} */}
        <div className="flex-1 shrink gap-2.5 mt-7 max-w-full text-sm font-semibold leading-6 text-blue-600 w-[508px] max-md:max-w-full">
          <span className="font-medium">
            By clicking the Sign Up button below, you agree to the our{" "}
          </span>
          <span className="font-medium text-blue-600">Term of Use</span>
          <span className="font-medium"> and </span>
          <span className="font-medium text-blue-600">Privacy Policy.</span>
        </div>
        <div className="flex flex-col justify-center mt-7 w-full text-sm max-md:max-w-full">
          <SignUpButton text="Sign Up" />
          <div className="flex gap-2 items-center self-center mt-4 text-center">
            <p className="self-stretch my-auto font-medium text-zinc-800">
              Already have an account?{" "}
            </p>
            <Link
              to="/signin"
              className="self-stretch my-auto font-semibold leading-loose text-orange-600"
            >
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

function validatePassword(password) {
  return {
    hasMinimum12Characters: password.length >= 12,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
}

const renderValidationIcon = (isValid) =>
  isValid ? <FaCheck color="green" /> : <FaTimes color="red" />;

export default SignUpForm;
export { validatePassword };
